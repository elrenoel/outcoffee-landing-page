import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Footer = () => {
  const whatsappUrl =
    "https://wa.me/6281234567890?text=Halo%20OutCoffee,%20saya%20ingin%20tanya%20ketersediaan%20tempat/menu...";

  return (
    <>
      {/* Dark Footer Section */}
      <footer className="w-full bg-[#18181b] text-white pt-20 pb-8 px-8 md:px-16 z-20 relative">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-12 lg:gap-0 mb-16">
          {/* Logo Watermark style */}
          <div className="md:w-1/3">
            <h2 className="text-6xl lg:text-[7rem] font-bold font-heading tracking-tight leading-[0.8] text-white/10 hover:text-white/20 transition-colors duration-500 cursor-default">
              Out
              <br />
              Coffee
            </h2>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 md:w-2/3 md:justify-items-end">
            {/* Pintasan */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold font-heading mb-2">Pintasan</h4>
              <NavHashLink
                smooth
                to="/#"
                className="text-white/60 hover:text-white transition-colors"
              >
                Beranda
              </NavHashLink>
              <Link
                to="/menu"
                className="text-white/60 hover:text-white transition-colors"
              >
                Menu
              </Link>
              <NavHashLink
                smooth
                to="/#maps"
                className="text-white/60 hover:text-white transition-colors"
              >
                Temukan Kami
              </NavHashLink>
              <NavHashLink
                smooth
                to="/#contact"
                className="text-white/60 hover:text-white transition-colors"
              >
                Kontak Kami
              </NavHashLink>
              <Link
                to="/booking"
                className="text-white/60 hover:text-white transition-colors"
              >
                Booking
              </Link>
            </div>

            {/* Sosial Media */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold font-heading mb-2">
                Sosial Media
              </h4>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                Tiktok
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                Facebook
              </a>
            </div>

            {/* Lokasi */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold font-heading mb-2">Lokasi</h4>
              <div className="text-white/60 space-y-2">
                <p>JL.Cempaka Putih No.25</p>
                <p>Medan, Sumatra Utara</p>
                <p className="pt-2 hover:text-white transition-colors cursor-pointer">
                  +62 812-3456-7890
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full pt-8 border-t border-white/10 text-center md:text-right hidden md:block">
          <p className="text-sm text-white/40">
            ©2026 copyright OutCoffee. All rights reserved.
          </p>
        </div>
        <div className="pt-8 border-t border-white/10 flex justify-center w-full md:hidden">
          <p className="text-sm text-white/40 text-center">
            ©2026 copyright OutCoffee.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
