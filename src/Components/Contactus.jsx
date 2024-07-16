import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    Email: '',
    subject: '',
    message: ''
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
    if (!formData.Email || !formData.subject || !formData.message) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    // Simulate sending (replace with actual sending logic)
    setSending(true);
    try {
      // Example: Call API to send email
      // Replace with actual API call
      // const response = await fetch('url', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // });
      // const data = await response.json();
      
      // Simulated success
      setSent(true);
      setFormData({
        Email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorMessage('Error sending email. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="py-20 lg:px-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Map Section */}
        <div className="lg:w-full bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a href="mailto:example@email.com" className="text-indigo-500 leading-relaxed">example@email.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="lg:w-full bg-white flex flex-col justify-center items-center px-8 py-12 lg:py-6 rounded-lg">
          <h2 className="text-gray-900 text-lg mb-4 font-medium">GET IN TOUCH</h2>
          <p className="text-gray-600 mb-8"></p>
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-4">
              <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Your Email:</label>
              <input
                type="text"
                id="Email"
                name="Email"
                placeholder="john@example.com"
                className="mt-1 block w-full py-3 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.Email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject..."
                className="mt-1 block w-full py-3 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full py-3 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none"
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
              {sending ? "Submitting..." : "Submit"}
            </button>
            <div className="mt-3">
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
  );
}

export default Contact;
