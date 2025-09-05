import React from "react";
import Navbar from "../components/Navbar";
import MyHeroImg from "../assets/myHERO.jpg";

const About = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center px-8 md:px-20 gap-12">
        
        {/* Left Side - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={MyHeroImg}
            alt="Profile"
            className="rounded-2xl shadow-lg w-72 h-72 md:w-80 md:h-80 object-cover border-4 border-indigo-500 hover:scale-105 transition duration-300"
          />
        </div>

        {/* Right Side - Intro */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-indigo-500">Me</span>
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Hi, I’m <span className="text-white font-semibold">Hamza</span>.  
            I’m a passionate <span className="text-indigo-400">Web Developer</span> from Pakistan, who enjoys turning ideas into reality through code.  
            I focus on building modern, responsive, and user-friendly websites using the latest technologies.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-10">
            <button className="bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-full text-white font-medium shadow-md transition">
              Download CV
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-full text-white font-medium shadow-md transition">
              Hire Me
            </button>
          </div>
        </div>
      </section>

    {/* Skills Section */}
<section className="bg-gray-800 py-16 px-8 md:px-20">
  <h3 className="text-3xl font-bold text-center text-white mb-12">
    My <span className="text-indigo-500">Skills</span>
  </h3>

  <div className="space-y-6 max-w-2xl mx-auto">
    {/* HTML */}
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">HTML</span>
        <span className="text-indigo-400">80%</span>
      </div>
      <progress value="80" max="100" className="w-full h-3 rounded-lg overflow-hidden [&::-webkit-progress-bar]:bg-gray-700 [&::-webkit-progress-value]:bg-orange-500 [&::-moz-progress-bar]:bg-orange-500"></progress>
    </div>

    {/* CSS */}
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">CSS</span>
        <span className="text-indigo-400">70%</span>
      </div>
      <progress value="70" max="100" className="w-full h-3 rounded-lg overflow-hidden [&::-webkit-progress-bar]:bg-gray-700 [&::-webkit-progress-value]:bg-blue-500 [&::-moz-progress-bar]:bg-blue-500"></progress>
    </div>

    {/* JavaScript */}
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">JavaScript</span>
        <span className="text-indigo-400">65%</span>
      </div>
      <progress value="65" max="100" className="w-full h-3 rounded-lg overflow-hidden [&::-webkit-progress-bar]:bg-gray-700 [&::-webkit-progress-value]:bg-yellow-400 [&::-moz-progress-bar]:bg-yellow-400"></progress>
    </div>

    {/* React */}
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">React</span>
        <span className="text-indigo-400">60%</span>
      </div>
      <progress value="60" max="100" className="w-full h-3 rounded-lg overflow-hidden [&::-webkit-progress-bar]:bg-gray-700 [&::-webkit-progress-value]:bg-cyan-400 [&::-moz-progress-bar]:bg-cyan-400"></progress>
    </div>
  </div>
</section>


      {/* Experience & Education */}
      <section className="bg-gray-900 py-16 px-8 md:px-20">
        <h3 className="text-3xl font-bold text-center text-white mb-12">
          Experience & <span className="text-indigo-500">Education</span>
        </h3>
        <div className="space-y-8">
          <div className="border-l-4 border-indigo-500 pl-6">
            <h4 className="text-xl font-semibold text-white">Web Developer</h4>
            <p className="text-gray-400">Freelancer (2023 - Present)</p>
            <p className="text-gray-300 mt-2">
              Building responsive websites and projects for clients worldwide.
            </p>
          </div>
          <div className="border-l-4 border-indigo-500 pl-6">
            <h4 className="text-xl font-semibold text-white">BS in Computer Science</h4>
            <p className="text-gray-400">University (2021 - 2025)</p>
            <p className="text-gray-300 mt-2">
              Specialized in Web Development and Data Science.
            </p>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="bg-gray-800 py-16 px-8 md:px-20">
        <h3 className="text-3xl font-bold text-center text-white mb-12">
          My <span className="text-indigo-500">Interests</span>
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          <span className="px-6 py-3 bg-indigo-500 text-white rounded-full shadow hover:bg-indigo-600 transition">⚽ Cricket</span>
          <span className="px-6 py-3 bg-indigo-500 text-white rounded-full shadow hover:bg-indigo-600 transition">🎵 Music</span>
          <span className="px-6 py-3 bg-indigo-500 text-white rounded-full shadow hover:bg-indigo-600 transition">💻 Coding</span>
          <span className="px-6 py-3 bg-indigo-500 text-white rounded-full shadow hover:bg-indigo-600 transition">📚 Reading</span>
        </div>
      </section>
    </div>
  );
};

export default About;
