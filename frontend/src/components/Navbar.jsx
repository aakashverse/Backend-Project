import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">
        Task Manager
      </h1>

      <div className="flex items-center gap-4">
        {!user && (
          <>
            <Link to="/" className="hover:underline">About</Link>
          </>
        )}

        {user && (
          <>
            <span className="text-sm">
              {user.name} ({user.role})
            </span>
             <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            <button
              onClick={logout}
              className="bg-white text-indigo-600 px-3 py-1 rounded hover:bg-gray-300 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}