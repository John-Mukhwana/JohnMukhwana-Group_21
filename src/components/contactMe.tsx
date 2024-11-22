import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FaWhatsapp } from 'react-icons/fa';
// import {
//   faLinkedin,
//   faTwitter,
//   faInstagram,
//   faDev,
//   faFacebook,
//   faTelegram,
//   faReddit
// } from '@fortawesome/free-brands-svg-icons';

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Changed from phoneNumber to phone
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log('Sending email:', formData);
      await axios.post('https://my-portfoliobackend.onrender.com/api/contact', formData);
      toast.success('Email sent successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) { // Added type 'any' for error
      console.error('Error sending email:', error);
      toast.error(`Error sending email: ${error.response?.data?.message || 'Please try again.'}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
  
      <div className="w-full max-w-full bg-gray-900 rounded-lg shadow-lg mb-8 mt-20  items-center justify-center text-white p-6 md:p-12">
        <h2 className="text-3xl font-bold mb-8 text-center  text-white dark:text-yellow-400">{'Lets Connect { }'}</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4">
            <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:johnradill67@gmail.com" className="flex items-center text-lg hover:text-gray-300">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-green-400 dark:text-yellow-400" />
                  johnbradill67@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+123456789" className="flex items-center text-lg hover:text-gray-300">
                  <FontAwesomeIcon icon={faPhone} className="mr-2  text-green-400 dark:text-yellow-400" />
                  Phone: +254112177489 , +254719312645.
                </a>
              </li>
              <li>
                <a href="https://wa.me/0719312645" target="_blank" rel="noopener noreferrer" className=" flex items-center text-lg hover:text-gray-300 ">
                <FaWhatsapp className="mr-2  text-green-400 dark:text-yellow-400" /> WhatsApp
              </a>
              </li>
              {/* <li>
                <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-gray-300">
                  <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-gray-300">
                  <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-gray-300">
                  <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://dev.to/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-gray-300">
                  <FontAwesomeIcon icon={faDev} className="mr-2" />
                  Dev.to
                </a>
              </li>
              <li>
                <a href="https://wa.me/0719312645" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition duration-300">
                <FaWhatsapp className="mr-2" /> WhatsApp
              </a>
              </li>
              <li>
                <a href="https://facebook.com/jontex.bradley" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-gray-300">
                  <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://t.me/@gadaffih_388" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-gray-300">
                  <FontAwesomeIcon icon={faTelegram} className="mr-2" />
                  Telegram
                </a>
              </li>
              <li>
                <a href="https://reddit.com/user/u/gadaffih" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-gray-300">
                  <FontAwesomeIcon icon={faReddit} className="mr-2" />
                  Reddit
                </a> */}
              {/* </li> */}
            </ul>
          </div>
          <div className="md:w-1/2 p-4">
            <h3 className="text-2xl font-bold mb-4">Send me an email</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded text-black  bg-gray-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2 " htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded text-black bg-gray-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone</label>
                <input
                  type="number"
                  name="phone"
                  id="phoneNumber"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded text-black bg-gray-200"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded text-black bg-gray-200"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded text-black bg-gray-200"
                  rows={5}
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-yellow-600 dark:hover:bg-green-400">Send</button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
   
  );
};

export default ContactMe;