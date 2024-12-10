import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const handleSendMessage = () => {
    const name = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const phone = document.querySelector('input[type="tel"]').value.trim();
    const message = document.querySelector('textarea').value.trim();

    if (!name || !email || !phone || !message) {
      return;
    }

    toast.success('Message sent successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="relative min-h-screen">
      {/* Image */}
      <img src="../assets/maps.jpg" alt="Contact Us" className="object-cover w-full h-64 sm:h-screen" />

      {/* Blackish layer */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-white w-full">
        <div className="text-center mt-[15rem]">
          {/* Title - Get In Touch */}
          <h1 className="text-3xl sm:text-6xl font-bold mb-4 opacity-80" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>Get In Touch</h1>

          {/* Phone Number */}
          <div className="flex items-center justify-center space-x-2 mb-2">
            <FaPhone className="text-xl sm:text-2xl" />
            <span className="text-lg cursor-pointer">Phone: <span className='text-yellow-400 text-xl sm:text-2xl cursor-pointer'>123-456-7890</span></span>
          </div>
          {/* Email Address */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FaEnvelope className="text-xl sm:text-2xl" />
            <span className="text-lg cursor-pointer">Email: <span className='text-yellow-400 text-xl sm:text-2xl cursor-pointer'>cetechmotors@gmail.com</span></span>
          </div>
          {/* Form */}
          <div className="max-w-md mx-auto grid grid-cols-1 gap-2 sm:max-w-2xl sm:grid-cols-2">
            {/* Left part */}
            <div className="input-container">
              <input type="text" placeholder="Name" className="w-full rounded-md px-4 py-2 outline-none text-gray-800 mb-2" />
              <input type="email" placeholder="Email" className="w-full rounded-md px-4 py-2 outline-none mb-2 text-gray-800" />
              <input type="tel" placeholder="Phone Number" className="w-full rounded-md px-4 py-2 outline-none mb-2 text-gray-800" />
            </div>
            {/* Right part */}
            <div className="textarea-container">
              <textarea placeholder="Message" className="w-full h-full rounded-md px-4 py-2 outline-none text-gray-800 mb-2" />
            </div>
          </div>
          {/* Send Message Button */}
          <button onClick={handleSendMessage} className="w-full mt-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 sm:w-auto max-w-[200px]">Send Message</button>

          {/* Google Maps Location */}
          <div className="mt-5">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.4943886627536!2d-122.08384768465747!3d37.3860515798113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580e25be1dbcd%3A0x8924d8fb26e1f859!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1647346302467!5m2!1sen!2sus"
              className="w-full sm:h-40"
              height="240px"
              width="700px"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="absolute bottom-0 w-full h-12"></div>

      {/* Media Query for Mobile */}
      <style jsx>{`
        @media (max-width: 640px) {
          .object-cover {
            height: 100vh;
          }

          .textarea-container {
            grid-column: 1 / span 2;
          }

          .sm\\:h-72 {
            height: 200px; /* Adjust the height as per your requirement */
          }
        }
      `}</style>

    </div>
  );
}

export default ContactUs;
