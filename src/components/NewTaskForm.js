import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // State to track form input values
  const [taskDetails, setTaskDetails] = useState({
    text: "",
    category: categories[0] || "", // Set default category if available
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if text is not empty before submitting
    if (taskDetails.text.trim() !== "") {
      // Call the onTaskFormSubmit prop to handle the form submission
      onTaskFormSubmit(taskDetails);
      // Clear the form inputs after submission
      setTaskDetails({
        text: "",
        category: categories[0] || "",
      });
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskDetails.text}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={taskDetails.category}
          onChange={handleInputChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

