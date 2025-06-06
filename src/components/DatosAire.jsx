import React from "react";

export default function DatosAire({ datosHoy, unit }) {
  return (
    <div className="w-full max-w-sm px-5 mt-12 md:w-full md:max-w-none md:m-auto md:flex md:flex-col md:items-center md:justify-center">
      <h2 className="h-7 text-[#E7E7EB] text-2xl font-bold my-5 md:w-full md:max-w-2xl md:text-left">
        Today Highlights
      </h2>

      <div className="w-full flex flex-col items-center md:grid md:grid-cols-2 gap-5 md:gap-6 md:max-w-2xl">
        <div className="w-full max-w-[328px] h-48 bg-[#1E213A] flex flex-col items-center justify-center">
          <h2 className="text-medium text-base text-center text-[#E7E7EB]">
            Wind status
          </h2>
          <div className="flex items-end h-20 mb-4">
            <h3 className="text-[#E7E7EB] text-6xl font-bold">
              {datosHoy?.wind?.speed}
            </h3>
            <h4 className="text-[#E7E7EB] text-4xl mb-2 ml-1">
              {unit === "metric" ? "ms" : "mph"}
            </h4>
          </div>
          <div className="flex items-center text-[#E7E7EB] text-sm">
            <span className="flex justify-center items-center w-8 h-8 m-3 rounded-full bg-[#ffffff4d]">
              <img
                alt="Navigation Icon"
                src="/navigation.svg"
                style={{ rotate: `${datosHoy?.wind?.deg}deg` }}
              />
            </span>
            {"S"}
          </div>
        </div>

        <div className="w-full max-w-[328px] h-48 bg-[#1E213A] flex flex-col items-center justify-center">
          <h2 className="text-medium text-base text-center text-[#E7E7EB]">
            Humidity
          </h2>
          <div className="flex items-end h-20 mb-4">
            <h3 className="text-[#E7E7EB] text-6xl font-bold">
              {datosHoy?.main?.humidity}
            </h3>
            <h4 className="text-[#E7E7EB] text-4xl mb-2 ml-1 text-right">%</h4>
          </div>
          <div className="w-[70%] font-bold text-xs flex justify-between text-[#A09FB1]">
            <p>0</p>
            <p>50</p>
            <p>100</p>
          </div>
          <div className="flex items-center w-[70%] h-2 bg-[#E7E7EB] rounded-3xl">
            <div
              className="h-2 bg-[#FFEC65] rounded-3xl m-0 p-0"
              style={{ width: `${datosHoy?.main?.humidity}%` }}
            />
          </div>
          <div className="w-[70%] text-right font-bold text-[#A09FB1]">%</div>
        </div>

        <div className="w-full max-w-[328px] flex flex-col items-center justify-center bg-[#1E213A] py-4">
          <h2 className="text-medium text-base text-center text-[#E7E7EB]">
            Visibility
          </h2>
          <div className="flex items-end h-20 mb-4">
            <h3 className="text-[#E7E7EB] text-6xl font-bold">
              {`${
                unit === "metric"
                  ? datosHoy?.visibility / 1000
                  : (datosHoy?.visibility / 1609.3439).toFixed(2)
              } `}
            </h3>
            <h4 className="text-[#E7E7EB] text-4xl mb-2 ml-1">
              {unit === "metric" ? "km" : "miles"}
            </h4>
          </div>
        </div>

        <div className="w-full max-w-[328px] flex flex-col items-center justify-center bg-[#1E213A] p-4">
          <h2 className="text-medium text-base text-center text-[#E7E7EB]">
            Air Pressure
          </h2>
          <div className="flex items-end h-20 mb-4">
            <h3 className="text-[#E7E7EB] text-6xl font-bold">
              {datosHoy?.main?.pressure}
            </h3>
            <h4 className="text-[#E7E7EB] text-4xl mb-2 ml-1">mb</h4>
          </div>
        </div>
      </div>

      <footer className="py-5 w-full flex flex-row justify-center items-center text-[#A09FB1]">
        <p className="text-sm font-medium text-center">Created by</p>
        <p className="font-bold text-sm text-center mx-1">AdrianaSheila</p>
        <p className="font-semibold text-sm text-center">-devChallenges.io</p>
      </footer>
    </div>
  );
}
