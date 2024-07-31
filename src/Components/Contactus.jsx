import { useState } from 'react';
import axios from "axios";
import {PacmanLoader} from 'react-spinners';
function Contact() {
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    phone_number:"",
    address:"",
    business: "",
    message: ""
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation logic could be added here
    if (!formData.email || !formData.name || !formData.message || !formData.phone_number || !formData.address || !formData.address || !formData.business) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    // Simulate sending (replace with actual sending logic)
    setSending(true);
    try {
      await axios.post('https://formspree.io/f/xpwaqvva', formData);
      setSent(true);
      setFormData({
        name:"",
        email: "",
        phone_number:"",
        address:"",
        business: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorMessage('Error sending email. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="py-18 lg:px-16 text-gray-600 relative">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
      {/* <div className='flex lg:flex-row flex-col justify-between items-center'> */}
        {/* Map Section */}
        <div className="rounded-lg overflow-hidden p-10 flex flex-col">
          <div className=''>
    <div class="absolute inset-0 bg-gray-300">
    <iframe width="100%" 
    frameborder="0" 
    height="100%"
    marginheight="0" 
    marginwidth="0" 
    title="map" 
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15551.903687059796!2d77.58272347048344!3d12.973391821480387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae160e24a33c53%3A0xa8784e7dfd7102ef!2sVANG%20TECHNOLOGIES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1722453007131!5m2!1sen!2sin"  
    style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}></iframe>
  </div>
         
          {/* <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">1,2,3, VANG TECHNOLOGIES PVT LTD, opp. Movie Land Theater, Gandhi Nagar, Bengaluru, Karnataka 560009</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a href="mailto:info@vangtechnologies.in" className="text-indigo-500 leading-relaxed">info@vangtechnologies.in</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">9380078320</p>
            </div>
          </div> */}
        </div>
        </div>

        {/* Contact Form Section */}
        <div className='px-8 py-5 lg:py-3'>
        <div className="lg:w-full md:w-2/3 md:mx-auto flex flex-col justify-center items-center rounded-lg bg-gray-100 px-7 py-4 lg:py-2 relative">
          <h2 className="text-gray-900 text-sm mb-4 font-medium">GET IN TOUCH</h2>
          <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-2">
              <label htmlFor="subject" className="block text-xs font-medium text-gray-700">Your Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name..."
                className="mt-1 block w-full py-3 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xs"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="Email" className="block text-xs font-medium text-gray-700">Your Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="john@example.com"
                className="mt-1 block w-full py-3 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xs"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="subject" className="block text-xs font-medium text-gray-700">Phone Number:</label>
              <input
                type="number"
                id="phone_number"
                name="phone_number"
                placeholder="Phone Number..."
                className="mt-1 block w-full py-3 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xs"
                value={formData.phone_number}
                onChange={handleChange}
              />
              </div>
            <div className="mb-2">
              <label htmlFor="subject" className="block text-xs font-medium text-gray-700">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address..."
                className="mt-1 block w-full py-3 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                value={formData.address}
                onChange={handleChange}
              />
              </div>
            <div className="mb-2">
              <label htmlFor="subject" className="block text-xs font-medium text-gray-700">Business Name:</label>
              <input
                type="text"
                id="business"
                name="business"
                placeholder="Subject..."
                className="mt-1 block w-full py-3 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xs"
                value={formData.business}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="block text-xs font-medium text-gray-700">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full py-3 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xs resize-none"
                placeholder="Describe the subject..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full py-3 px-4 bg-black text-white rounded-md font-medium shadow-sm hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 ${sending ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={sending}
            >
              {sending ? <PacmanLoader size={9} color="#ffffff" /> : "Submit"}
            </button>
            <div className="mt-3 h-20 flex flex-col items-center">
              {sent && (
                <p className="text-green-600">Your email has been successfully sent!</p>
              )}
              {errorMessage && (
                <p className="text-red-600">{errorMessage}</p>
              )}
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Contact;
