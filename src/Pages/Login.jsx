import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // page reload rokne ke liye
    // Abhi ke liye sirf console aur alert
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Login successful!");

    // ✅ Login ke baad dashboard pr bhejna
    navigate("/home");
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen flex-col bg-gray-200">
      <h1 className="text-3xl mb-4 font-bold">Login Page</h1>

      <div className="flex flex-col h-2/3 w-full max-w-md bg-gray-500 gap-4 px-6 py-6 border-2 rounded-lg">
        
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input 
            className="border-2 px-4 py-2 rounded-lg placeholder-gray-200 focus:outline-none focus:ring-0" 
            type="email" 
            placeholder="Enter your Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input 
            className="border-2 px-4 py-2 rounded-lg placeholder-gray-200 focus:outline-none focus:ring-0" 
            type="password" 
            placeholder="Enter your Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button 
            type="submit"
            className="px-4 py-2 border-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition hover:cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-white mt-4">
          If you haven't registered yet, 
          <Link to="/register" className="text-blue-300 hover:underline ml-1">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
