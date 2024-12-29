"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="h-20 bg-black flex items-center px-10 text-white shadow-lg relative">
      <ul className="hidden md:flex space-x-8 items-center text-lg">
        <li className="transition-all transform hover:scale-105">
          <Link href="/">Home</Link>
        </li>
        <li className="transition-all transform hover:scale-105">
          <Link href="/about">About</Link>
        </li>
        <li className="transition-all transform hover:scale-105">
          <Link href="/shorten">Shorten</Link>
        </li>
      </ul>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
        <div className="absolute bg-white transform -skew-x-12 px-4 py-1">
          <span className="text-black text-3xl font-bold">LinkCut</span>
        </div>
        <span className="text-3xl font-bold opacity-0">LinkCut</span>
      </div>

      <ul className="hidden md:flex space-x-8 items-center text-lg ml-auto">
        <li className="transition-all transform hover:scale-105">
          <Link href="/contact">Contact Us</Link>
        </li>
        <li className="transition-all transform hover:scale-105">
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className="transition-all transform hover:scale-105">
          <Link href="/github">GitHub</Link>
        </li>
      </ul>

      <button
        className="md:hidden text-white text-3xl ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {menuOpen && (
        <div className="md:hidden fixed top-0 right-0 h-full w-1/2 bg-black text-white z-10 flex flex-col items-center pt-10">
          <button
            className="absolute top-4 right-4 text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          <ul className="flex flex-col space-y-4 items-center text-lg">
            <li className="transition-all transform hover:scale-105">
              <Link href="/">Home</Link>
            </li>
            <li className="transition-all transform hover:scale-105">
              <Link href="/about">About</Link>
            </li>
            <li className="transition-all transform hover:scale-105">
              <Link href="/shorten">Shorten</Link>
            </li>
            <li className="transition-all transform hover:scale-105">
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="transition-all transform hover:scale-105">
              <Link href="/try">Try Now</Link>
            </li>
            <li className="transition-all transform hover:scale-105">
              <Link href="/github">GitHub</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
