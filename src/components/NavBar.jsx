import React from "react";

export default function NavBar() {
  return (
    <div className="bg-[#1E213A] w-screen  min-h-screen flex flex-col items-center md:flex-row">
      <div className="bg-[#1E213A] flex flex-col w-screen h-screen overflow-hidden md:w-[30%] md:min-w-[380px] md:m-auto">
        <nav className="flex justify-around items-end h-16">
          <input
            className="w-44 h-9 bg-[#6E707A] text-[#E7E7EB] cursor-pointer text-center"
            type="button"
            value="Search for Places"
          />
          <div className="flex items-center justify-center w-10 h-10 bg-[#ffffff33] rounded-full cursor-pointer">
            <img
              alt="location icon"
              className="transparent w-6"
              src="/location.svg"
            />
          </div>
        </nav>

        <div className="flex flex-col items-center w-full h-[90vh]">
          <div className="flex flex-col items-center justify-center w-full h-[45%] relative overflow-hidden ">
            <img
              alt="condition"
              className="w-full h-full object-contain opacity-15"
              src="/others/Cloud-background.png"
            />
            <img
              src="public/weather/03d.png"
              alt=""
              className="absolute w-20"
            />
          </div>

          <div className="flex items-center">
            <h2 className="font-medium text-9xl text-[#E7E7EB] my-8">20</h2>
            <h3 className="mt-6 text-6xl text-[#A09FB1] font-medium">°C</h3>
          </div>

          <h2 className="capitalize pt-6 pb-12 text-3xl text-[#A09FB1] font-semibold">
            broken clouds
          </h2>

          <p className="text-sm text-[#88869D] font-medium mb-6">
            Today . Tue, 28 Apr
          </p>

          <pre className="flex items-center gap-2 text-sm text-[#88869D] h-10 bottom-0 font-semibold mb-2">
            <img
              alt="locationicon"
              className="mb-2 w-5"
              src="location_on.svg"
            />
            Santa Cruz de la Sierra
          </pre>
        </div>
      </div>
    </div>
  );
}
