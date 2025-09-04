import React from "react";

const PricingBlock = ({ pricingItems }) => {
  return (
    <div className="flex flex-col items-center justify-center h-fit">
      <div className="flex w-4/5 flex-wrap justify-center gap-x-6 gap-y-16 my-10 sm:gap-y-12">
        {pricingItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between p-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-fit min-h-[500px] bg-cover bg-center blog-post-shadow relative"
          >
            <div className="absolute logo-blue-color text-white font-quicksand font-extrabold -top-8 p-4 ">
              <p className="text-3xl">{item.price}</p>
            </div>
            <div className="my-10">
              <h2 className="text-2xl font-bold mb-2 text-center">
                {item.text}
              </h2>
              <p className="text-base overflow-auto">{item.description}</p>
            </div>
            <div className="bottom-0 w-full">
              <button className="bg-gray-500 hover:bg-[#0088cc] p-4 w-full btn-pricing uppercase text-white font-bold hover:transform hover:scale-105 transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingBlock;
