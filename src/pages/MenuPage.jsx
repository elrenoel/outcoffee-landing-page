import { useState, useEffect, useRef } from "react";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { categories, menuItems } from "../data/menuData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const sectionRefs = useRef({});

  // Initialize refs for each category section
  useEffect(() => {
    categories.forEach((cat) => {
      if (!sectionRefs.current[cat.id]) {
        sectionRefs.current[cat.id] = null;
      }
    });
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveCategory(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const cat of categories) {
        const element = document.getElementById(cat.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const absoluteTop = top + window.pageYOffset;
          const absoluteBottom = bottom + window.pageYOffset;

          if (
            scrollPosition >= absoluteTop &&
            scrollPosition < absoluteBottom
          ) {
            setActiveCategory(cat.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-primary min-h-screen font-body text-text-dark">
      <Navbar />

      {/* Mobile Category Nav (Sticky Top) */}
      <div className="md:hidden sticky top-18 z-40 bg-primary/95 backdrop-blur-sm border-b border-text-dark/5 overflow-x-auto hide-scrollbar px-4 py-3 flex gap-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => scrollToSection(cat.id)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat.id
                ? "bg-text-dark text-white"
                : "bg-white/50 text-text-dark/60 hover:bg-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-20">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 shrink-0">
            <div className="sticky top-32 flex flex-col gap-2">
              <Link
                to="/"
                className="flex items-center gap-2 text-text-dark/60 hover:text-text-dark mb-8 transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="font-medium">Kembali ke Beranda</span>
              </Link>
              <h2 className="text-2xl font-heading font-bold mb-6 tracking-tight">
                Kategori
              </h2>
              <nav className="flex flex-col gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => scrollToSection(cat.id)}
                    className={`text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                      activeCategory === cat.id
                        ? "bg-text-dark text-white shadow-lg shadow-black/5 translate-x-1"
                        : "text-text-dark/50 hover:text-text-dark hover:bg-white"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="flex flex-col gap-16 md:gap-24">
              {categories.map((cat) => (
                <section key={cat.id} id={cat.id} className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 md:mb-12 tracking-tight flex items-center gap-4">
                    {cat.name.toUpperCase()}
                    <div className="h-px flex-1 bg-text-dark/10"></div>
                  </h2>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {menuItems
                      .filter((item) => item.categoryId === cat.id)
                      .map((item, idx) => (
                        <div
                          key={item.id}
                          className="flex gap-4 md:gap-6 bg-white p-4 md:p-5 rounded-lg hover:shadow-xl hover:shadow-black/5 transition-all duration-500 group border border-transparent hover:border-text-dark/5 animate-fadeInUp"
                          style={{ animationDelay: `${idx * 0.05}s` }}
                        >
                          <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden bg-[#f0f0e8] shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>
                          <div className="flex flex-col justify-center flex-1">
                            <h3 className="text-lg md:text-xl font-heading font-semibold text-text-dark mb-1 group-hover:text-black">
                              {item.name}
                            </h3>
                            <p className="text-text-dark/50 text-xs md:text-sm line-clamp-2 mb-2 leading-relaxed font-body">
                              {item.description}
                            </p>
                            <div className="mt-auto flex justify-between items-center">
                              <span className="font-heading font-bold text-text-dark md:text-lg">
                                Rp {item.price}
                              </span>
                              <button className="md:opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-text-dark text-white rounded-full">
                                <ChevronRight size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </section>
              ))}
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MenuPage;
