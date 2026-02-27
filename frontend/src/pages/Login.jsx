import { useState, useContext } from "react";
import API from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const baseURL = import.meta.env.VITE_API_BASE_URL;

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post(`${baseURL}/api/v1/auth/login`, form);
      login(res.data);
      navigate('/dashboard');
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-96"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
            Welcome Back
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-2 border rounded focus:ring-2 focus:ring-indigo-400"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-2 border rounded focus:ring-2 focus:ring-indigo-400"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Login
          </button>
            <div className="flex justify-center text-md text-gray-800">
                <Link to="/" className="hover:underline">Back to Registeration</Link>
            </div>

          {message && (
            <p className="mt-4 text-center text-sm text-red-500">{message}</p>
          )}
        </form>
      </div>
    </>
  );
}