import React, { useState } from "react";
import { AddTask } from "./AddTask";
import styles from "./taskApp.module.css";
import { TaskHeader } from "./TaskHeader";
import { Tasks } from "./Tasks";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const[todo,setTodo]=useState([])
  const [isCompleated,setisCompleated]=useState(todo.isCompleated)
  const deleteTodo=(id)=>{
    setTodo(todo.filter((todo)=>todo.id!== id));
 }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader/>
      <AddTask todo={todo} setTodo={setTodo}/>
      <Tasks value={todo} deleteTodo={deleteTodo} isCompleated={isCompleated} setisCompleated={setisCompleated} />
      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;