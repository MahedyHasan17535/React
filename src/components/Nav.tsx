import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-base-200 bg-base-100/90 backdrop-blur">
      {/* Mobile row: hamburger (left) / logo (true center) / auth buttons (right) */}
      <div className="grid grid-cols-3 items-center px-4 py-4 md:hidden">
        <button
          onClick={handleToggleMenu}
          className="btn btn-ghost btn-square justify-self-start"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </button>

        <a href="/" className="flex items-center gap-2 justify-self-center">
          <span className="brand-gradient-bg flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white">
            DS
          </span>
        </a>

        <div className="flex items-center gap-2 justify-self-end">
          <button className="btn btn-ghost btn-xs px-2">Sign In</button>
          <button className="brand-gradient-bg btn btn-xs rounded-full border-none px-3 text-white">
            Sign Up
          </button>
        </div>
      </div>

      {/* Desktop row: logo / nav links / auth buttons */}
      <div className="container mx-auto hidden items-center justify-between px-4 py-4 md:flex">
        <a href="/" className="flex items-center gap-2">
          <span className="brand-gradient-bg flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white">
            DS
          </span>
          <span className="text-lg font-bold">
            Dev <span className="brand-gradient-text">Stack</span>
          </span>
        </a>

        <ul className="flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link} className="cursor-pointer hover:text-primary">
              {link}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button className="btn btn-ghost btn-sm">Sign In</button>
          <button className="brand-gradient-bg btn btn-sm rounded-full border-none px-5 text-white">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile dropdown links */}
      {isMenuOpen && (
        <ul className="flex flex-col gap-1 border-t border-base-200 px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <li
              key={link}
              className="cursor-pointer rounded-lg px-2 py-2 hover:bg-base-200"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;