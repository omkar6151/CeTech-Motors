import React, { useState } from 'react';

const FixedButton = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // You can add further logic here, like sending the form data to a server
    // Reset form fields after submission if needed
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
    });
    // Close the form after submission
    toggleForm();
  };

  return (
    <>
      <div className="fixed right-0 bottom-0 flex flex-row-reverse items-end justify-end mr-0 mb-[20rem]">
        <button
          className="bg-red-600 hover:bg-red-800 text-white py-3 px-5 shadow-md sm:py-2 sm:px-3 sm:text-sm"
          onClick={toggleForm}
        >
          Enquire Now
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Enquiry Form */}
          <div className="bg-white p-4 sm:p-8 rounded-lg border border-gray-300 shadow-md sm:w-96">
            {/* Form content */}
            <h2 className="text-3xl font-bold mb-4 text-center">Enquiry Form</h2>
            {/* Form fields */}
            <form onSubmit={handleSubmit}>
              <div className="mb-2 sm:mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-2 sm:mb-4">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone No."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-2 sm:mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4 sm:mb-6">
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md sm:py-2 sm:px-3 sm:text-sm"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-6 rounded-md sm:py-2 sm:px-3 sm:text-sm"
                  onClick={toggleForm}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FixedButton;
