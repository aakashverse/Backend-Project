import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import TaskForm from "../components/Form";
const baseURL = import.meta.env.VITE_API_BASE_URL;

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await API.get(`${baseURL}/api/v1/tasks`);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title) return;
    await API.post(`${baseURL/tasks}`, { title });
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`${baseURL}/api/v1/tasks/${id}`);
    fetchTasks();
  };

  const toggleStatus = async (task) => {
    await API.put(`${baseURL}/api/v1/tasks/${task._id}`, {
      status: task.status === "pending" ? "completed" : "pending",
    });
    fetchTasks();
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6 text-indigo-600">
            Your Tasks
          </h2>

          <TaskForm
            title={title}
            setTitle={setTitle}
            addTask={addTask}
          />

          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="flex justify-between items-center p-3 border rounded hover:shadow transition"
              >
                <div>
                  <p className={`font-medium ${
                    task.status === "completed"
                      ? "line-through text-gray-400"
                      : ""
                  }`}>
                    {task.title}
                  </p>
                  <span className="text-xs text-gray-500">
                    {task.status}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => toggleStatus(task)}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Toggle
                  </button>
                  <button
                    onClick={() => deleteTask(task._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}