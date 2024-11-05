const Locations = () => {
  return (
    <div className="bg-pink-50 text-gray-800 min-h-screen py-8 mt-20">
      <h1 className="text-4xl font-bold text-center mb-6">Our Locations</h1>
      <p className="text-center mb-8">
        Visit us at one of our delicious Crumbl Cookies locations!
      </p>

      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Downtown Bakery</h2>
          <p className="text-gray-600">123 Cookie Lane</p>
          <p className="text-gray-600">Cityville, CA 90210</p>
          <p className="text-gray-600">Open: Mon - Sun, 9 AM - 9 PM</p>
          <a
            href="#"
            className="text-pink-500 hover:text-pink-700 mt-4 inline-block"
          >
            Get Directions
          </a>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Uptown Sweets</h2>
          <p className="text-gray-600">456 Cookie Road</p>
          <p className="text-gray-600">Townsville, CA 90211</p>
          <p className="text-gray-600">Open: Mon - Sun, 10 AM - 8 PM</p>
          <a
            href="#"
            className="text-pink-500 hover:text-pink-700 mt-4 inline-block"
          >
            Get Directions
          </a>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Westside Cookies</h2>
          <p className="text-gray-600">789 Sweet Street</p>
          <p className="text-gray-600">Happy Town, CA 90212</p>
          <p className="text-gray-600">Open: Mon - Sun, 11 AM - 7 PM</p>
          <a
            href="#"
            className="text-pink-500 hover:text-pink-700 mt-4 inline-block"
          >
            Get Directions
          </a>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">East End Treats</h2>
          <p className="text-gray-600">321 Dessert Ave</p>
          <p className="text-gray-600">Sugar Town, CA 90213</p>
          <p className="text-gray-600">Open: Mon - Sun, 9 AM - 10 PM</p>
          <a
            href="#"
            className="text-pink-500 hover:text-pink-700 mt-4 inline-block"
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Locations;
