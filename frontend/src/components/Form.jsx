export default function TaskForm({ title, setTitle, addTask }) {
  return (
    <div className="flex gap-2 mb-6">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task..."
        className="flex-1 p-2 border rounded focus:ring-2 focus:ring-indigo-400"
      />
      <button
        onClick={addTask}
        className="bg-indigo-600 text-white px-4 rounded hover:bg-indigo-700 transition"
      >
        Add
      </button>
    </div>
  );
}