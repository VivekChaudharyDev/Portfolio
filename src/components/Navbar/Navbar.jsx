import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import faviconDark from '../../assets/myProfileDark.png';
import faviconLight from '../../assets/myProfile1.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    //dynamic favicon update based on theme
    const favicon = document.querySelector("link[rel='icon']");
    favicon.href = theme === "dark" ? faviconDark : faviconLight;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 47);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Auto-close mobile menu on desktop
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ✅ Scroll Spy (works on both desktop + mobile)
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navHeight = document.querySelector("nav")?.offsetHeight || 80;
    let observer;

    const createObserver = () => {
      if (observer) {
        sections.forEach((section) => observer.unobserve(section));
      }

      observer = new IntersectionObserver(
        (entries) => {
          // Collect all currently intersecting sections and pick the one
          // closest to the top of the viewport (smallest boundingClientRect.top >= 0)
          const intersecting = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

          if (intersecting.length > 0) {
            setActiveSection(intersecting[0].target.id);
          }
        },
        {
          // Use a single threshold so every section triggers reliably
          threshold: 0.15,
          // Only offset the top by the navbar height; leave a generous bottom margin
          rootMargin: `-${navHeight}px 0px -30% 0px`,
        }
      );

      sections.forEach((section) => observer.observe(section));
    };

    createObserver();
    window.addEventListener("resize", createObserver);

    return () => {
      if (observer) {
        sections.forEach((section) => observer.unobserve(section));
      }
      window.removeEventListener("resize", createObserver);
    };
  }, []);

  const handleMenuItemClick = (itemId) => {
    setActiveSection(itemId);
    setIsOpen(false);

    const element = document.getElementById(itemId);
    if (element) {
      let yOffset;
      if (itemId === "about") {
        yOffset = -160;
      } else if (itemId === "skills" || itemId === "contact") {
        yOffset = -20;
      } else {
        yOffset = -80;
      }
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      setActiveSection(itemId);
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed font-bold top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[18vw] ${isScrolled
          ? "bg-dark-bg/20 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
        }`}
    >
      <div className="text-dark-text py-5 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-xl font-semibold cursor-pointer"
          onClick={() => handleMenuItemClick("about")}
        >
          <span className="text-global-clr">&lt;</span>
          <span className="dark:text-dark-text text-light-text">Vivek</span>
          <span className="text-global-clr">/</span>
          <span className="dark:text-dark-text text-light-text">Kumar</span>
          <span className="text-global-clr">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex dark:text-dark-text text-light-text space-x-8 text-lg">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`relative 
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
                after:h-[2px] after:bg-global-clr after:transition-all after:duration-300 after:ease-in-out 
                hover:after:w-full ${activeSection === item.id
                  ? "after:w-full text-global-clr"
                  : ""
                }`}
            >
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className="cursor-pointer"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className="hidden md:flex space-x-4 text-2xl">
          <a
            href="https://github.com/VivekChaudharyDev"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-dark-text text-light-text hover:text-global-clr"
          >
            <FaGithub size={24} title="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/vivek-kumar-software-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-dark-text text-light-text hover:text-global-clr"
          >
            <FaLinkedin size={24} title="LinkedIn" />
          </a>
          <button
            onClick={toggleTheme}
            area-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="inherit hover:cursor-pointer "
          >
            {theme === "dark" ? (
              <MdLightMode className="text-yellow-300 hover:text-global-clr rounded-full" title="Switch to Light Mode" size={24} />
            ) : (
              <MdDarkMode className="text-light-text hover:text-global-clr rounded-full" title="Switch to Dark Mode" size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu Icons */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-global-clr cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-global-clr cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-4/5 bg-[#053c48]/60 backdrop-blur-lg z-50 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-dark-text">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`relative cursor-pointer 
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
                  after:h-[2px] after:bg-global-clr after:transition-all after:duration-300 after:ease-in-out 
                  hover:after:w-full ${activeSection === item.id
                    ? "after:w-full text-global-clr"
                    : ""
                  }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            <div className="flex space-x-4">
              <a
                href="https://github.com/VivekChaudharyCS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-text hover:text-global-clr"
              >
                <FaGithub size={24} title="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/vivek-kumar-software-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-text hover:text-global-clr"
              >
                <FaLinkedin size={24} title="LinkedIn" />
              </a>
              <button
                onClick={toggleTheme}
                area-label={`Switch to ${theme === "dark" ? "light" : "dark"
                  } mode`}
                className="inherit hover:cursor-pointer "
              >
                {theme === "dark" ? (
                  <MdLightMode className="text-yellow-300 hover:text-global-clr rounded-full" title="Switch to Dark Mode" size={24} />
                ) : (
                  <MdDarkMode className="text-light-text hover:text-global-clr rounded-full" title="Switch to Light Mode" size={24} />
                )}
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;