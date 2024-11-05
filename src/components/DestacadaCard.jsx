import PropTypes from "prop-types";

export const DestacadaCard = ({
  imageSrc,
  title,
  description,
  price,
  reverse,
}) => {
  return (
    <div
      className={`flex ${
        reverse ? "flex-row-reverse" : "flex-row"
      } items-center hover:bg-blue-200 w-full max-w-4xl rounded-3xl bg-white text-black transition-colors duration-300`}
    >
      <img src={imageSrc} alt={title} className="w-48 h-48 object-cover" />

      <div className="p-4 w-full flex-1 min-h-[250px] flex flex-col justify-center items-center">
        <h2 className="text-xl tracking-wide font-extrabold mb-2 text-center">
          {title}
        </h2>

        <p className="mt-3 text-center">{description}</p>

        {price && (
          <p className="text-lg font-semibold mb-4 text-center">{price}</p>
        )}
      </div>
    </div>
  );
};

DestacadaCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string,
  reverse: PropTypes.bool,
};
