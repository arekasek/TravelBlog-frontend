import React from "react";
import header from "@/globalData/header.json";
import Link from "next/link";
import Image from "next/image";
import Headroom from "react-headroom";

export default function Header() {
  return (
    <>
      <div id="header">
        <div className="w-full absolute top-0 z-10 py-6 px-8 text-center flex items-center justify-between">
          <div className="flex h-16 w-16">
            <img
              src={header.logo.url}
              alt={header.logo.alt}
              width={header.logo.width}
              className="object-contain"
            />
          </div>

          <div
            className="hidden md:flex gap-12 px-6 py-3 rounded-xl 
                          bg-white/10 backdrop-blur-md shadow-md border border-white/10"
          >
            {header.navLinks.map((link, index) => {
              return (
                <div key={index}>
                  <Link
                    className="hover:underline text-white transition duration-200"
                    href={link.link}
                  >
                    {link.label}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="buttons flex gap-4">
            <button className="bg-gray-200 backdrop-blur-md text-black rounded-lg px-5 py-2 border border-white/10 shadow-md hover:bg-white/40 transition">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
