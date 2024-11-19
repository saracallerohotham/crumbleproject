import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = ({ target: { id, value } }) =>
    setFormData((prev) => ({ ...prev, [id]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    setSuccess("Thank you! We'll get back to you soon.");
    setError("");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-pink-100 text-gray-800 min-h-screen py-8 pt-24">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-center mb-8">We would love to hear from you!</p>

      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 px-4 sm:px-6">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <form onSubmit={handleSubmit}>
          {["name", "email", "message"].map((field) => (
            <div key={field} className="mb-4">
              <label className="block text-gray-700 capitalize" htmlFor={field}>
                {field}
              </label>
              {field === "message" ? (
                <textarea
                  id={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  rows="4"
                  placeholder={`Your ${field}`}
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder={`Your ${field}`}
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition"
          >
            Send
          </button>
        </form>
      </div>

      <div className="mt-8 text-center px-4">
        <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
        <div className="flex justify-center space-x-4">
          {["Facebook", "Instagram", "Twitter"].map((platform) => (
            <a
              key={platform}
              href="#"
              className="text-pink-500 hover:text-pink-700 transition"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
