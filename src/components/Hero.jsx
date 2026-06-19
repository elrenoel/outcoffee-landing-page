import heroBg from "../assets/assetHeroBg.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src={heroBg}
        alt="Barista menuangkan kopi"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 flex min-h-screen flex-col justify-between px-4 pb-28 pt-24 md:px-5 md:pb-40 md:pt-32">
        <h1 className="max-w-130 text-[42px] font-bold leading-[0.95] tracking-[-7%] text-primary sm:text-6xl lg:text-7xl">
          Santai Dulu
          <br />
          Kopi Kemudian.
        </h1>

        <div className="flex w-full justify-end">
          <div className="mr-0 flex max-w-107.5 flex-col items-start gap-2.5 text-primary">
            <p className="text-lg font-medium leading-snug tracking-[-7%]">
              Gak usah buru-buru, nikmatin waktu luangmu di sudut paling tenang
              bareng racikan kita.
            </p>
            <Link
              to="/menu"
              className="rounded-full border border-primary px-12 py-2.5 text-base font-medium transition-colors duration-300 hover:bg-primary/20"
            >
              Lihat Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
