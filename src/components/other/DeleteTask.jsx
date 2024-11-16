import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const DeleteTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const [tasks, setTasks] = useState([]);

  const handleEmployeeChange = (e) => {
    const employeeName = e.target.value;
    setSelectedEmployee(employeeName);

    const employee = userData.find((user) => user.firstName === employeeName);
    if (employee) {
      setTasks(employee.tasks);
    } else {
      setTasks([]);
    }
  };

  const handleDeleteTask = () => {
    if (selectedEmployee && selectedTaskIndex !== null) {
      const updatedUserData = [...userData];
      const employee = updatedUserData.find(
        (user) => user.firstName === selectedEmployee
      );

      if (employee) {
        const taskToDelete = employee.tasks[selectedTaskIndex];
        if (taskToDelete) {
          // Update task count based on the task properties
          if (taskToDelete.newTask) employee.taskCounts.newTask -= 1;
          if (taskToDelete.active) employee.taskCounts.active -= 1;
          if (taskToDelete.completed) employee.taskCounts.completed -= 1;
          if (taskToDelete.failed) employee.taskCounts.failed -= 1;

          // Remove the task
          employee.tasks.splice(selectedTaskIndex, 1);
          setUserData(updatedUserData);
          alert("Task deleted successfully!");
        }
      }
      setTasks([]);
      setSelectedEmployee("");
      setSelectedTaskIndex(null);
    } else {
      alert("Please select an employee and a task to delete.");
    }
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      <div>
        <h3 className="text-sm text-gray-300 mb-2">Select Employee</h3>
        <select
          value={selectedEmployee}
          onChange={handleEmployeeChange}
          className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
        >
          <option value="" disabled>
            Select Employee
          </option>
          {userData.map((employee) => (
            <option key={employee.id} value={employee.firstName}>
              {employee.firstName}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h3 className="text-sm text-gray-300 mb-2">Select Task</h3>
        <select
          value={selectedTaskIndex}
          onChange={(e) => setSelectedTaskIndex(e.target.value)}
          className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent text-white border-[1px] border-gray-400 mb-4"
        >
          <option value="" disabled>
            Select Task
          </option>
          {tasks.map((task, index) => (
            <option key={index} value={index}>
              {task.title} - {task.date}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleDeleteTask}
        className="bg-red-500 py-3 hover:bg-red-600 px-5 rounded text-sm mt-4 w-full"
      >
        Delete Task
      </button>
    </div>
  );
};

export default DeleteTask;
