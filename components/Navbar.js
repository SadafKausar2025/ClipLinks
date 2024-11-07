import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-20 bg-green-800 flex justify-between px-7 items-center text-white ">
      <div className="logo text-white font-bold text-2xl">
        <Link href="/">ClipLinks</Link>
      </div>

      <ul className="flex justify-center items-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/shorten">Shorten</Link>
        <Link href="/contact">Contact</Link>
        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="bg-green-500 shadow-lg p-3 rounded-lg py-1 font-bold ">
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className="bg-green-500 shadow-lg p-3 rounded-lg py-1 font-bold ">
              Github
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
