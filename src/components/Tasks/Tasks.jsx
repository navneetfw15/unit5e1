import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <h1>Tasks</h1>
      <ul data-cy="tasks" className={styles.tasks}>
        {props.value.map((todo)=>(
        <Task key={todo.id} todo={todo} delete={props.deleteTodo} isCompleated={props.isCompleated} setisCompleated={props.setisCompleated}/>))}
        {/* Task List */}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;