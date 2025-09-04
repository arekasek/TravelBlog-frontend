import React from "react";
import footer from "@/globalData/footer.json";
import Link from "next/link";

export default function Footer({ icon }) {
  return (
    <div className="w-full logo-blue-color py-4 px-6">
      <div className="flex-wrap flex flex-row gap-4 z-10 p-5 justify-between md:justify-evenly items-center top-0 text-left font-quicksand">
        {footer.bottomNavLinks.map((categoryItem, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="font-bold text-white text-sm md:text-xl mb-2">
              {categoryItem.category}
            </div>
            {categoryItem.links.map((linkItem, linkIndex) => (
              <div key={linkIndex}>
                <Link
                  className="text-white text-xs md:text-base hover:underline text-left"
                  href={linkItem.link}
                >
                  {linkItem.label}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
