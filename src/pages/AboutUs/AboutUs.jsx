export const AboutUs = () => {
  return (
    <section className="bg-pink-200 text-black pt-24 pb-12 px-6 md:pt-32 md:pb-16 md:px-12">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About Crumbl Cookies
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          At Crumbl Cookies, we believe in creating unforgettable cookie
          experiences. Founded with the mission to craft the perfect cookie for
          every occasion, we’ve built a brand that combines the warmth of
          homemade treats with the excitement of modern flavors.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Our menu rotates weekly, offering a variety of freshly baked cookies
          with unique twists that keep our fans coming back for more. From
          classic favorites like chocolate chip to daring innovations like
          cookie butter lava, there’s something for everyone.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          Join us on our journey of flavor and fun! Every Crumbl cookie is baked
          fresh daily, and we can’t wait to share a sweet moment with you.
        </p>
        <button className="mt-8 bg-pink-300 hover:bg-pink-400 text-black font-bold py-3 px-6 rounded-full shadow-md transition-all duration-200">
          Learn More
        </button>
      </div>
    </section>
  );
};
