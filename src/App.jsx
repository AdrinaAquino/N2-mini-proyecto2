import React from "react";
import NavBar from "./components/NavBar";
import TemperaturaDiaria from "./components/TemperaturaDiaria";
import DatosAire from "./components/DatosAire";

export default function App() {
  return (
    <div className="bg-[#1E213A] w-screen  min-h-screen flex flex-col items-center md:flex-row">
      <NavBar />
      <div className="w-full h-fit min-h-screen flex flex-col items-center bg-[#100E1D] md:w-[70%] md:min-w-[580px] md:max-h-screen">
        <TemperaturaDiaria />
        <DatosAire />
      </div>
    </div>
  );
}
