import { collatedTasks } from "../constants";

// utility: check if a selected project exists in collatedTasks
export const collatedTasksExist = (selectedProjectId) => 
  collatedTasks.find((task) => task.key === selectedProjectId);