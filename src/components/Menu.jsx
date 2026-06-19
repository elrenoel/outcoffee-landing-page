import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../data/menuData";

const menuData = menuItems.slice(0, 6);

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dotsCount, setDotsCount] = useState(menuData.length);
  const carouselRef = useRef(null);

  const calculateActiveIndex = () => {
    if (!carouselRef.current) return;
    const parentContainer = carouselRef.current;
    if (parentContainer.children.length === 0) return;

    const parentRect = parentContainer.getBoundingClientRect();
    const childWidth =
      parentContainer.children[0].getBoundingClientRect().width;

    // Menghitung berapa item yang terlihat utuh di layar
    const visibleCount = Math.max(1, Math.round(parentRect.width / childWidth));
    const expectedDots = Math.max(1, menuData.length - visibleCount + 1);

    setDotsCount(expectedDots);

    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(parentContainer.children).forEach((child, index) => {
      const childRect = child.getBoundingClientRect();
      const distance = Math.abs(childRect.left - parentRect.left);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    const safeIndex = Math.min(closestIndex, expectedDots - 1);

    setActiveIndex((current) => {
      return current !== safeIndex ? safeIndex : current;
    });
  };

  const handleScroll = () => {
    calculateActiveIndex();
  };

  useEffect(() => {
    calculateActiveIndex();
    window.addEventListener("resize", calculateActiveIndex);
    return () => window.removeEventListener("resize", calculateActiveIndex);
  }, []);

  const scrollTo = (index) => {
    if (!carouselRef.current) return;
    const parentContainer = carouselRef.current;
    const child = parentContainer.children[index];

    if (child) {
      // Calculate child's offset relative to container scroll space minus typical padding
      parentContainer.scrollTo({
        left: child.offsetLeft - 16,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full px-4 pb-20 pt-10 md:py-20 bg-primary">
      <div className="w-full flex flex-col" id="menu">
        {/* Header Section */}
        <div className="flex flex-row justify-between items-end mb-10">
          <h2 className="text-[2.5rem] md:text-5xl font-bold font-heading tracking-tighter text-text-dark leading-none">
            Menu Pilihan
          </h2>
          <Link
            to="/menu"
            className="hidden md:block px-6 py-3 rounded-lg bg-text-dark text-white text-sm font-medium hover:bg-text-dark/90 transition-colors shrink-0 text-center"
          >
            Lihat Semua Menu
          </Link>
        </div>

        {/* Menu Grid / Carousel */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-8 hide-scrollbar pb-6 animate-fadeIn"
        >
          {menuData.map((item, index) => (
            <div
              key={item.id}
              className="w-full md:w-[calc(33.333%-1.33rem)] md:min-w-[calc(33.333%-1.33rem)] shrink-0 snap-center md:snap-start flex flex-col group cursor-pointer animate-fadeInScale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-full aspect-4/5 overflow-hidden rounded-lg mb-4 bg-[#e8e8df]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-heading font-medium text-text-dark text-center mt-2 tracking-tight">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Slider Navigation Dots */}
        <div className="flex justify-center items- gap-3 mt-2 md:mt-4 w-75 mx-auto">
          {Array.from({ length: dotsCount }).map((_, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2.5 md:h-3 rounded-full transition-all duration-500 ease-out focus:outline-none ${
                  isActive
                    ? "flex-1 md:w-24 bg-[#3D2C23]"
                    : "w-2.5 md:w-3 bg-[#3D2C23]/30 hover:bg-[#3D2C23]/60"
                }`}
                aria-label={`Go to menu slide ${index + 1}`}
              />
            );
          })}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 md:hidden flex justify-center">
          <Link
            to="/menu"
            className="px-8 py-3.5 rounded-lg bg-text-dark text-white text-md font-medium hover:bg-black/90 transition-colors w-full text-center"
          >
            Lihat Semua Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
