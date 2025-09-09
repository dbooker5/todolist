import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collatedTasksExist } from "../helpers";
import moment from "moment";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  getDocs,
} from "firebase/firestore";

// Hook to get tasks
export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    let q = query(collection(db, "tasks"), where("userId", "==", "bMFge#p@6C6x#husband"));

    if (selectedProject && !collatedTasksExist(selectedProject)) {
      q = query(q, where("projectId", "==", selectedProject));
    } else if (selectedProject === "TODAY") {
      q = query(q, where("date", "==", moment().format("DD/MM/YYYY")));
    } else if (selectedProject === "INBOX" || selectedProject === 0) {
      q = query(q, where("date", "==", ""));
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newTasks = snapshot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }));

      setTasks(
        selectedProject === "NEXT_7"
          ? newTasks.filter(
              (task) =>
                moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
                task.archived !== true
            )
          : newTasks.filter((task) => task.archived !== true)
      );

      setArchivedTasks(newTasks.filter((task) => task.archived === true));
    });

    return () => unsubscribe();
  }, [selectedProject]);

  return { tasks, archivedTasks };
};

// Hook to get projects
export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const q = query(
        collection(db, "projects"),
        where("userId", "==", "bMFge#p@6C6x#husband"),
        orderBy("projectId")
      );

      const snapshot = await getDocs(q);
      const allProjects = snapshot.docs.map((project) => ({
        id: project.id,
        ...project.data(),
      }));

      if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
        setProjects(allProjects);
      }
    };

    fetchProjects();
  }, [projects]);

  return { projects, setProjects };
};