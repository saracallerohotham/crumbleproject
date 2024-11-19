import heroVideo from "../assets/heroVideo.mp4";

function Hero() {
  return (
    <div className="relative top-[-80px] z-0 h-96 bg-gray-900 text-white flex justify-center items-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default Hero;
