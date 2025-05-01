import React from "react";

export default function TemperaturaDiaria() {
  return (
    <>
      <div className="flex justify-end items-end h-20 w-64 gap-5 md:max-w-2xl md:w-full">
        <button className="w-10 h-10 pr-1 pt-1 text-center text-xl font-bold text-[#110E3C] bg-[#E7E7EB] rounded-full cursor-pointer">
          °C
        </button>
        <button className="w-10 h-10 pr-1 pt-1 text-center text-xl font-bold text-[#E7E7EB] bg-[#585676] rounded-full cursor-pointer">
          °F
        </button>
      </div>

      <div className="w-full md:px-5">
        <ul className="grid grid-cols-2 w-fit mx-auto gap-5 mt-5 md:max-w-2xl md:flex md:flex-row md:flex-wrap md:gap-4 md:w-fit">
          {[{ day: "Tomorrow", max: "25°C", min: "18°C", icon: "04d" }].map(
            (item) => (
              <li
                key={item.day}
                className="w-[7.5rem] h-40 bg-[#1E213A] flex flex-col items-center justify-center text-[#E7E7EB] text-base font-medium"
              >
                <h3 className="mb-2">{item.day}</h3>
                <span className="flex items-center justify-center w-14 h-16">
                  <img
                    alt="condition"
                    className="w-full h-full object-contain"
                    src={`/weather/${item.icon}.png`}
                  />
                </span>
                <div className="flex gap-2 mt-2">
                  <p>{item.max}</p>
                  <p className="text-[#A09FB1]">{item.min}</p>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}
