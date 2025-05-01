import React, { useState } from "react";
export default function NavBar() {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className="bg-[#1E213A] flex flex-col w-screen h-screen overflow-hidden md:w-[30%] md:min-w-[380px] md:m-auto">
      <nav className="flex justify-around items-end h-16">
        <button
          className="w-44 h-9 bg-[#6E707A] text-[#E7E7EB] cursor-pointer text-center rounded-md"
          onClick={() => setMenuVisible(true)}
        >
          Search for Places
        </button>
        <div className="flex items-center justify-center w-10 h-10 bg-[#ffffff33] rounded-full cursor-pointer">
          <img
            alt="location icon"
            className="transparent w-6"
            src="/location.svg"
          />
        </div>
      </nav>

      {menuVisible && (
        <div className="z-10 w-screen h-screen max-h-screen bg-[#1E213A] absolute top-0 left-0 md:w-[30vw] md:min-w-[380px]">
          <nav className="w-full h-24 flex items-end justify-around">
            <span className="absolute right-10 top-6 cursor-pointer">
              <button
                onClick={() => setMenuVisible(false)}
                className="text-white text-2xl font-bold hover:text-red-200"
              >
                x
              </button>
            </span>
            <div className="flex items-center w-[55%] max-w-[268px] h-9 bg-transparent border border-[#E7E7EB] font-medium text-base text-[#616475]">
              <img alt="Search Icon" className="mx-2 w-6" src="/search.svg" />
              <input
                className="bg-transparent outline-none w-[233px] h-8 pr-1 rounded-md"
                placeholder="search location"
                type="text"
                value=""
              />
            </div>
            <button className="w-20 h-9 bg-[#3C47E9] px-1 font-semibold text-base text-[#E7E7EB] hover:bg-[#c586f9] cursor-pointer rounded-md">
              Search
            </button>
          </nav>
          <ul className="flex flex-col items-center w-full h-fit mt-80px pb-5"></ul>
        </div>
      )}

      <div className="flex flex-col items-center w-full h-[90vh]">
        <div className="flex flex-col items-center justify-center w-full h-[45%] relative overflow-hidden ">
          <img
            alt="condition"
            className="w-full h-full object-cover opacity-15"
            src="/others/Cloud-background.png"
          />
          <img src="public/weather/03d.png" alt="" className="absolute w-20" />
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
          <img alt="locationicon" className="mb-2 w-5" src="location_on.svg" />
          Santa Cruz de la Sierra
        </pre>
      </div>
    </div>
  );
}
