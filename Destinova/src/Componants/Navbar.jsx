"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: " Add Destinations", path: "/add-destinations" },
    { name: "My Bookings", path: "/my-bookings" },
    { name: "Destination", path: "/destination" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        
        {/* LEFT */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-gray-700 font-medium hover:text-black transition duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* LOGO */}
        <Link href="/">
          {/* <Image
            src="/assets/Wanderlast.png"
            alt="Wanderlust"
            width={120}
            height={120}
            className="object-contain"
          /> */}

          <h1 className="text-xl font-bold">Desti<span className="text-black/60 font-extrabold">Nova</span></h1>
        </Link>

        {/* RIGHT */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/profile"
            className="text-gray-700 font-medium hover:text-black transition"
          >
            Profile
          </Link>

          <Link
            href="/login"
            className="px-4 py-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition duration-300"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition duration-300"
          >
            Sign Up
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-black"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-5 py-5 space-y-4">
          
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 font-medium hover:text-black transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
            <Link
              href="/profile"
              className="text-gray-700 font-medium hover:text-black"
            >
              Profile
            </Link>

            <Link
              href="/login"
              className="w-full text-center px-4 py-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="w-full text-center px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;