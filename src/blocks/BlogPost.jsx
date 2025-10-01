"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const TwoColumn = ({ heading, text, image, sign, date, slug }) => {
  if (!image?.url) return null;

  return (
    <div className="w-full">
      <Link href={`/${slug}`}>
        <div className="blog-post-shadow aspect-square my-5 w-full h-[400px] flex flex-col rounded-2xl overflow-hidden transform transition-transform hover:scale-105 hover:duration-300 hover:ease-in-out">
          <div className="h-1/2 relative w-full">
            <Image
              src={image.url}
              alt={image.alt || ""}
              fill
              className="object-cover"
            />
            {sign && (
              <div className="absolute top-2 left-2 bg-white/70 backdrop-blur-md text-black px-3 py-1 rounded-lg text-sm font-quicksand font-semibold">
                {sign}
              </div>
            )}
          </div>

          <div className="h-1/2 bg-white p-4 flex flex-col justify-center">
            <h2 className="md:text-xl text-gray-700 font-semibold sm:text-base font-oswald mb-2">
              {heading}
            </h2>

            <p className="text-gray-500 text-sm font-quicksand font-normal sm:text-xs md:text-base line-clamp-3">
              {text}
            </p>

            {date && (
              <div className="mt-3">
                <span className="hover:underline text-gray-500 text-sm font-light">
                  {date}
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TwoColumn;
