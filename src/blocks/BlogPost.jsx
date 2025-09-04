import React from "react";

const TwoColumn = ({ heading, text, image, direction }) => {
  return (
    <div className="flex items-center justify-center w-3/5 m-auto">
      <div className="rounded-l-md flex flex-col blog-post-shadow my-5 w-4/5 xl:w-4/6 transform transition-transform hover:scale-105 hover:duration-300 hover:ease-in-out">
        <div className="flex flex-row md:gap-8 sm:gap-1">
          <div className="flex-1 relative h-48">
            <img
              src={image.url}
              alt={image.alt}
              className="object-cover w-full h-full rounded-l-md"
            />
          </div>
          <div className="flex-1 p-3 flex items-center">
            <article>
              <div className="h-12">
                <h2 className="md:text-2xl text-gray-500 font-normal sm:text-base font-oswald">
                  {heading}
                </h2>
              </div>

              <p className="truncate-3-lines text-gray-400 text-xs font-quicksand font-normal sm:text-xs md:text-base lg:text-lg">
                {text}
              </p>
              <div className="mt-5">
                <a className="hover:underline text-gray-500 hover:cursor-pointer text-sm font-light">
                  Read more
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumn;
