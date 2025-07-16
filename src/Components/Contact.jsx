import React, { useState } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { TfiLocationPin } from "react-icons/tfi";
 
 function Contact() { 
  const [formData, setFormData] = useState({
    name: 'clinton',
    email: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Message sent!');
    // Reset form
    setFormData({ name: '', email: '', message: '' }); // Fixed "Name" to "name"
  };

  // ✅ Properly place return outside handleSubmit
  return ( 
    <div className="p-10"><br /><br /><br />
      <div className="text-center mb-10">
        <h1 className="font-black text-3xl">Get In Touch</h1>
        <p className="text-xl">We'd love to hear from you. Send us a message!</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4">
        <h2 className="text-2xl font-bold text-center mb-4">Send Message</h2>

        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
            
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
      <div className='cont'>
                  <h3 className='co'>Contact</h3>
                  <span className='call'><p><MdOutlineMail />hello@modernblog.com</p>
                    <p><IoCallOutline />+234 (0) 123 456 789</p>
                    <p><TfiLocationPin />Ibadan,Nigeria</p>
                  </span>
        
        
                </div>
    </div>
  );
}

export default Contact;

 