import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'

const Register = () => {
  // states for inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate  = useNavigate();

  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created successfully, please login.")
    navigate("/login")

   
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen flex-col bg-gray-200">
      <h1 className="text-3xl mb-4 font-bold">Register Page</h1>

      <div className="flex flex-col h-2/3 w-full max-w-md bg-gray-500 gap-4 px-6 py-6 border-2 rounded-lg">
        
        {/* ✅ form with submit */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            className="border-2 px-4 py-2 rounded-lg placeholder-gray-200 focus:outline-none focus:ring-0" 
            type="text" 
            placeholder="Enter your username" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input 
            className="border-2 px-4 py-2 rounded-lg placeholder-gray-200 focus:outline-none focus:ring-0" 
            type="email" 
            placeholder="Enter your email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input 
            className="border-2 px-4 py-2 rounded-lg placeholder-gray-200 focus:outline-none focus:ring-0" 
            type="password" 
            placeholder="Enter your password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button 
            type="submit"
            className="px-4 py-2 border-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition hover:cursor-pointer"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-white mt-4">
          If you are already registered, then 
          <Link to="/login" className="text-blue-300 hover:underline ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register