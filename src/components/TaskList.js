import React from "react";
import Task from "./Task"

function TaskList({tasks}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <h2>Task List</h2>
      <ul>
        {tasks.map(function(task) {
          return <Task key = {task.id} task = {task} onDeleteTask={onDeleteTask}/>;
        })}
      </ul>
    </div>
  );
}

export default TaskList;
