import { destacadas } from "../data/destacadas";
import { DestacadaCard } from "./DestacadaCard";

export function Destacadas() {
  return (
    <div className="container mx-auto px-4 py-8">
      <p className="bg-pink-300 rounded-lg py-2 px-3 inline-block font-semibold">
        Cookies of the week
      </p>
      <h1 className=" tracking-wide text-4xl font-extrabold mb-6 mt-6 text-center">
        National Flavors
      </h1>
      <div className="flex flex-col items-center space-y-6">
        {destacadas.map((cookie, index) => (
          <DestacadaCard
            key={cookie.id}
            imageSrc={cookie.imageSrc}
            title={cookie.title}
            description={cookie.description}
            price={cookie.price}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}
