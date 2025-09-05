import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 flex flex-col items-center p-6 text-gray-200">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Contact Us
        </h1>
        <p className="text-gray-400 text-center max-w-xl mb-10">
          Have questions or need help? Fill out the form below or reach us
          through our contact details. We’d love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6">
            <form className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-300">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-1 px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full mt-1 px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none transition"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 shadow-md transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="mb-4 text-gray-400">
              Feel free to reach out to us via email, phone, or visit our office.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>
                📍 <span className="font-semibold">Address:</span> Majeed Colony Sector Landhi  Karachi 
              </li>
              <li>
                📞 <span className="font-semibold">Phone:</span> +3102314554
              </li>
              <li>
                📧 <span className="font-semibold">Email:</span> beelaal2024@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full max-w-6xl mt-10">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28936.481223389157!2d67.03499705!3d24.91802715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ddc8a3b5fdf%3A0xf8b8a3d76cbe6e4c!2sKarachi!5e0!3m2!1sen!2s!4v1694087421480!5m2!1sen!2s"
            className="w-full h-64 rounded-2xl shadow-lg border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
