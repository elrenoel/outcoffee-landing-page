import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import maskBg from "../assets/mask-bg.png";

const navItems = [
  { label: "Beranda", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "Kontak Kami", path: "/contact" },
  { label: "Booking", path: "/booking" },
];

const Navbar = () => {
  const [isPastHero, setIsPastHero] = useState(false);
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const isSolidNavbar = !isHomePage || isPastHero;

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const handleScroll = () => {
      setIsPastHero(window.scrollY >= window.innerHeight);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  console.log(pathname);

  return (
    <div
      className={`fixed z-50 w-full transition-all duration-75 ${
        isSolidNavbar ? "bg-primary border-[0.5px] border-b-[#C5C5C5]" : ""
      }`}
    >
      <img
        src={maskBg}
        alt="mask-bg"
        className={isSolidNavbar ? "hidden" : "fixed z-[-1]"}
      />
      <nav className="flex justify-between items-center px-4 h-13.75">
        <h1
          className={`text-3xl font-bold tracking-[-5%] transition-colors duration-300 ${
            isSolidNavbar ? "text-secondary" : "text-primary"
          }`}
        >
          <Link to="/">OutCoffee</Link>
        </h1>
        <ul className="flex items-center">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`px-5 transition-colors duration-300 ${
                  isSolidNavbar ? "text-secondary" : "text-primary"
                } hover:underline font-light ${pathname === item.path ? "font-semibold underline" : ""}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
