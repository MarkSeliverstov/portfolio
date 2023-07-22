import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <a href="/" className="pl-8">
        Mark
      </a>
      <div className="pr-8 md:block hidden">
        <a href="/" className="p-4">
          Home
        </a>
        <a href="/" className="p-4">
          About
        </a>
        <a href="/" className="p-4">
          Contact
        </a>
        <a href="/" className="p-4">
          Services
        </a>
      </div>
    </nav>
  );
}
