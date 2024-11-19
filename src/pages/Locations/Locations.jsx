const locationsData = [
  {
    name: "Downtown Bakery",
    address: "123 Cookie Lane",
    city: "Cityville, CA 90210",
    hours: "Mon - Sun, 9 AM - 9 PM",
  },
  {
    name: "Uptown Sweets",
    address: "456 Cookie Road",
    city: "Townsville, CA 90211",
    hours: "Mon - Sun, 10 AM - 8 PM",
  },
  {
    name: "Westside Cookies",
    address: "789 Sweet Street",
    city: "Happy Town, CA 90212",
    hours: "Mon - Sun, 11 AM - 7 PM",
  },
  {
    name: "East End Treats",
    address: "321 Dessert Ave",
    city: "Sugar Town, CA 90213",
    hours: "Mon - Sun, 9 AM - 10 PM",
  },
];

const Locations = () => {
  return (
    <div className="bg-pink-50 text-gray-800 min-h-screen py-8 mt-20">
      <h1 className="text-4xl font-bold text-center mb-6">Our Locations</h1>
      <p className="text-center mb-8">
        Visit us at one of our delicious Crumbl Cookies locations!
      </p>

      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
        {locationsData.map((location, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold mb-2">{location.name}</h2>
            <p className="text-gray-600">{location.address}</p>
            <p className="text-gray-600">{location.city}</p>
            <p className="text-gray-600">Open: {location.hours}</p>
            <a
              href="#"
              className="text-pink-500 hover:text-pink-700 mt-4 inline-block"
            >
              Get Directions
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
