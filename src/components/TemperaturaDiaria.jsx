import React, { useState } from "react";
import useData from "../hooks/useData";

export default function TemperaturaDiaria({ selectedCountry }) {
  const [unit, setUnit] = useState("metric");

  const { response, loading } = useData(
    `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCountry}&appid=caa65e9571cc6093cf2e7a5cfc9a6156&units=${unit}`
  );

  return (
    <>
      <div className="flex justify-end items-end h-20 w-64 gap-5 md:max-w-2xl md:w-full">
        <button
          className="w-10 h-10 pr-1 pt-1 text-center text-xl font-bold text-[#110E3C] bg-[#E7E7EB] rounded-full cursor-pointer"
          onClick={() => setUnit("metric")}
        >
          °C
        </button>
        <button
          className="w-10 h-10 pr-1 pt-1 text-center text-xl font-bold text-[#E7E7EB] bg-[#585676] rounded-full cursor-pointer"
          onClick={() => setUnit("imperial")}
        >
          °F
        </button>
      </div>

      <div className="w-full md:px-5">
        <ul className="grid grid-cols-2 w-fit mx-auto gap-5 mt-5 md:max-w-2xl md:flex md:flex-row md:flex-wrap md:gap-4 md:w-fit">
          {getForecast(response).map((item) => (
            <li
              key={item.dt}
              className="w-[7.5rem] h-40 bg-[#1E213A] flex flex-col items-center justify-center text-[#E7E7EB] text-base font-medium"
            >
              <h3 className="mb-2">{item.formatedDate}</h3>
              <span className="flex items-center justify-center w-14 h-16">
                <img
                  alt="condition"
                  className="w-full h-full object-contain"
                  src={`/weather/${item.weather[0].icon}.png`}
                />
              </span>
              <div className="flex gap-2 mt-2">
                <p>
                  {Math.round(item.main.temp_max)}
                  {unit === "metric" ? "°C" : "°F"}
                </p>
                <p className="text-[#A09FB1]">
                  {Math.round(item.main.temp_min)}
                  {unit === "metric" ? "°C" : "°F"}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function getForecast(response) {
  const today = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let last = today.toLocaleDateString("eng-GB", options);
  let filtered = response?.list?.filter((item) => {
    const date = new Date(item.dt * 1000);
    const formated = date.toLocaleDateString("eng-GB", options);
    if (formated !== last) {
      last = formated;
      return true;
    }
    return false;
  });
  return (filtered || []).map((item) => {
    const date = new Date(item.dt * 1000);
    const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
    const day = date.getDate(); // 5
    const month = date.toLocaleDateString("en-US", { month: "short" });

    return {
      ...item,
      formatedDate: `${weekday}, ${day} ${month}`,
    };
  });
}
