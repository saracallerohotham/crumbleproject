import heroVideo from "../assets/heroVideo.mp4"; // Ajusta la ruta según sea necesario

function Hero() {
  return (
    <div className="relative z-0 h-96 bg-gray-900 text-white flex justify-center items-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute bottom-10 w-full flex justify-center z-10">
        <button className="px-8 py-3 bg-black text-white font-bold rounded-full hover:text-black hover:bg-transparent  hover:border-black">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
