import React from "react";
import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

export const Checkbox = ({ id }) => {
  const archiveTask = async () => {
    try {
      const taskRef = doc(db, "tasks", id); // reference to the document
      await updateDoc(taskRef, { archived: true }); // update archived field
      console.log(`Task ${id} archived`);
    } catch (error) {
      console.error("Error archiving task:", error);
    }
  };

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={archiveTask}
    >
      <span className="checkbox" />
    </div>
  );
};