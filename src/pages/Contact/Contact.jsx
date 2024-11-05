// src/components/Contact.js
const Contact = () => {
  return (
    <div className="bg-pink-100 text-gray-800 min-h-screen py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-center mb-8">
        We would love to hear from you! Please fill out the form below or reach
        out to us through our social media.
      </p>

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
              rows="4"
              placeholder="Your Message"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-bold py-2 rounded-lg hover:bg-pink-700 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
        <p>Stay updated on our latest offers and delicious galletas!</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-pink-500 hover:text-pink-700">
            Facebook
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-700">
            Instagram
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-700">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
