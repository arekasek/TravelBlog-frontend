import React, { useId, useEffect, useState } from "react";

const MainBlock = ({ heading, text, image }) => {
  const clipId = useId();
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1000);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="w-full min-h-[900px] h-full bg-gray-300  relative overflow-hidden min-w-[300px]">
      {isLargeScreen && (
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id={clipId} clipPathUnits="objectBoundingBox">
              <path d="M0.01,0.015 L0.01,0.46 A0.02,0.04 0,0,0 0.03,0.5 L0.35,0.5 A0.02,0.04 0,0,1 0.37,0.54 L0.37,0.945 A0.025,0.05 0,0,0 0.395,0.985 L0.97,0.985 A0.02,0.04 0,0,0 0.99,0.955 L0.99,0.14 A0.02,0.04 0,0,0 0.97,0.10 L0.82,0.10 A0.02,0.04 0,0,1 0.8,0.06 L0.8,0.045 A0.02,0.04 0,0,0 0.78,0.015 L0.58,0.015 L0.03,0.015 A0.02,0.04 0,0,0 0.01,0.045 Z" />
            </clipPath>
          </defs>
        </svg>
      )}

      <div className="main-block w-full min-h-[900px] h-screen flex items-center justify-center relative">
        <div
          className="w-[100%] h-[100%] rounded-xl flex flex-col items-center justify-center text-white brightness-[0.8] contrast-[0.9]"
          style={{
            backgroundImage: `url(${image.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            clipPath: isLargeScreen ? `url(#${clipId})` : "none",
            borderRadius: isLargeScreen ? "0" : "0.75rem",
          }}
        ></div>

        <div className="absolute left-4 bottom-4 z-10 w-[33vw] h-[400px]">
          <div className="w-full h-full p-4 sm:p-6 md:p-8 rounded-3xl overflow-y-auto ">
            <h2 className="text-gray-800 font-oswald font-light mb-2 text-2xl md:text-3xl lg:text-4xl 2xl:text-8xl break-words">
              {heading}
            </h2>
            <p className="text-gray-600 font-oswald font-light text-sm md:text-base lg:text-lg break-words mt-4 max-w-[30vw]">
              {text}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .break-words {
          overflow-wrap: break-word;
          word-wrap: break-word;
          hyphens: auto;
        }
        @media (max-width: 768px) {
          .max-w-\[30vw\] {
            max-width: 80vw !important;
          }
        }
      `}</style>
    </div>
  );
};

export default MainBlock;
