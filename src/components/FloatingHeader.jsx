import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FloatingHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black bg-opacity-15" : "bg-transparent opacity-0"
      } backdrop-blur-md shadow-md`}
    >
      <nav className="container mx-auto flex justify-end items-center py-6 px-6 lg:px-10">
        <div className="flex items-center space-x-6 lg:space-x-10">
          <Link
            to="/"
            className="text-lg font-semibold text-gray-800 hover:text-blue-500 hover:underline"
          >
            Home
          </Link>
          <Link
            to="/submit_your_paper"
            className="text-lg font-semibold text-gray-800 hover:text-blue-500 hover:underline"
          >
            Submit Your Paper
          </Link>
          <Link
            to="/registration"
            className="text-lg font-semibold text-gray-800 hover:text-blue-500 hover:underline"
          >
            Registration Guidelines
          </Link>
          <button
            onClick={() =>
              document
                .getElementById("sidebar")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="text-lg font-semibold text-gray-800 hover:text-blue-500 hover:underline"
          >
            Other
          </button>
        </div>
      </nav>
    </header>
  );
};

export default FloatingHeader;
