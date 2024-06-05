import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  //update to pass the `onDeleteTask` function to the `TaskList` component
  const [tasks, setTasks] = useState(TASKS);
  const [categories] = useState(CATEGORIES);

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task = task.id !== taskToDelete.id));
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories}/>
      <NewTaskForm categories={categories} onTaskFormSubmit={handleAddTask}/>
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
