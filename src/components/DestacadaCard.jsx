import PropTypes from "prop-types";

export function DestacadaCard({
  imageSrc,
  title,
  description,
  price,
  reverse,
}) {
  return (
    <div
      className={`flex ${
        reverse ? "flex-row-reverse" : "flex-row"
      } items-center hover:bg-blue-200 w-full max-w-4xl rounded-3xl bg-white text-black transition-colors duration-300`}
    >
      {/* Imagen Principal */}
      <img src={imageSrc} alt={title} className="w-48 h-48 object-cover" />

      {/* Contenido */}
      <div className="p-4 w-full flex-1 min-h-[250px]">
        {/* Título */}
        <h2 className="text-xl tracking-wide font-extrabold mb-2">{title}</h2>

        {/* Descripción */}
        <p className="mt-3">{description}</p>

        {/* Precio (Opcional) */}
        {price && <p className="text-lg font-semibold mb-4">{price}</p>}

        {/* Botón de Acción */}
        <a
          href="#!"
          className="inline-block text-center text-black font-semibold py-2 px-4 rounded-full transition-transform transform hover:translate-x-4 duration-300"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}

DestacadaCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string,
  reverse: PropTypes.bool,
};
