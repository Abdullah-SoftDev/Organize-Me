import { useEffect, useState } from "react";
import FlipMove from 'react-flip-move';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TodoList = () => {
  const [task, setTask] = useState(""); //User Input
  const [tasks, setTasks] = useState([])

  // Fetch the tasks from the localStorage.
  useEffect(() => {
    let storedTasks = localStorage.getItem("localTasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, [task]);

  // Function to add tasks to localStorage.
  const addTask = () => {
    if (!task) return;
    setTasks([...tasks, task]);
    localStorage.setItem("localTasks", JSON.stringify([...tasks, task]));
    setTask("");
    toast.success("Task Added!")
  };

  // Function to delete a task from localStorage.
  const removeTodo = (index) => {
    const newList = tasks.filter((_, i) => i !== index);
    localStorage.setItem("localTasks", JSON.stringify(newList));
    setTasks(newList);
    toast.success("Task Deleted!")
  };

  return (
    <div className="p-5 max-w-5xl mx-auto">
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex space-x-3">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          className="py-3 px-5 block w-full border border-gray-200 rounded-full text-md"
          placeholder="Add your daily task here..."
        />
        <button
          onClick={addTask}
          type="button"
          className="px-5 justify-center items-center rounded-md bg-blue-200 font-semibold text-blue-700"
        >
          Add
        </button>
      </div>
      <FlipMove>
        {tasks && tasks.map((e, index) => (
          <div key={index} className="flex space-x-3 items-center mt-5">
            <p
              className="py-6 px-4 block w-full border border-gray-200 rounded-md text-sm"
            >
              {e}
            </p>
            <button className="px-5 py-2 justify-center items-center rounded-md bg-red-300  font-semibold text-red-700 relative" onClick={() => removeTodo(index)}>Delete</button>
          </div>
        ))}</FlipMove>
    </div>
  );
};

export default TodoList;
