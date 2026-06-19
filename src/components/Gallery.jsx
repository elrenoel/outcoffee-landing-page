import barista from "../assets/barista.jpg";
import coffeeBeans from "../assets/coffee-beans.jpg";
import cafe from "../assets/cafe.jpg";

const Gallery = () => {
  return (
    <section className="w-full px-4 py-16 md:py-24 bg-primary">
      <div className="w-full flex flex-col md:flex-row gap-8 items-start mb-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter text-text-dark leading-[1.1] md:leading-tight animate-fadeInUp">
            Pelarian Singkat
            <br className="hidden md:block" /> dari Deadline.
          </h2>
        </div>
        <div className="md:w-1/2 md:mt-2">
          <p
            className="text-lg text-text-dark/80 font-medium leading-[1.6] animate-fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            Burnout itu nyata, tapi kopi kami jauh lebih nyata. Taruh dulu
            laptopmu, rebahkan bahu sebentar, dan biarkan sudut estetik kami
            jadi tempatmu{" "}
            <strong className="font-bold text-text-dark">'log out'</strong> dari
            dunia yang lagi berisik.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 md:h-150 lg:h-175 gap-4 md:gap-6">
        {/* Left large image */}
        <div className="w-full aspect-4/5 md:aspect-auto md:row-span-2 rounded-lg overflow-hidden group bg-[#e8e8df] animate-fadeInUp">
          <img
            src={barista}
            alt="Barista OutCoffee"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Top right image */}
        <div
          className="w-full aspect-4/3 md:aspect-auto md:col-start-2 md:row-start-1 rounded-lg overflow-hidden group bg-[#e8e8df] animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          <img
            src={coffeeBeans}
            alt="Biji Kopi Pilihan"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Bottom right image */}
        <div
          className="w-full aspect-4/3 md:aspect-auto md:col-start-2 md:row-start-2 rounded-lg overflow-hidden group bg-[#e8e8df] animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <img
            src={cafe}
            alt="Interior OutCoffee"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
