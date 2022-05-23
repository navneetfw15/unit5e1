import React from "react";
import { Counter } from "../Counter";
import styles from "./task.module.css";

const Task = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  const deleteTask=()=>{
    props.delete(props.todo.id)
  }
  
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox"key={props.todo.id}
        checked={props.todo.isCompleated} 
        onChange={(e)=>{props.setisCompleated(e.target.checked);console.log(e)}}
         />
     
      <div data-cy="task-text">{props.todo.Value}</div>
      <Counter/>
      {/* Counter here */}
      <button data-cy="task-remove-button" onClick={deleteTask}>x</button>
    </li>
  );
};

export default Task;