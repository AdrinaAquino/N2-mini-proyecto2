import React, { useState } from "react";
import NavBar from "./components/NavBar";
import TemperaturaDiaria from "./components/TemperaturaDiaria";
import DatosAire from "./components/DatosAire";
import useData from "./hooks/useData";

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState("Oruro");
  const [unit, setUnit] = useState("metric");
  const { response: datosHoy, loading } = useData(
    `https://api.openweathermap.org/data/2.5/weather?q=${selectedCountry}&appid=caa65e9571cc6093cf2e7a5cfc9a6156&units=${unit}`
  );
  return (
    <div className="bg-[#1E213A] w-screen  min-h-screen flex flex-col items-center md:flex-row">
      <NavBar
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        datosHoy={datosHoy}
        unit={unit}
      />
      <div className="w-full h-fit min-h-screen flex flex-col items-center bg-[#100E1D] md:w-[70%] md:min-w-[580px] md:max-h-screen">
        <TemperaturaDiaria
          selectedCountry={selectedCountry}
          unit={unit}
          setUnit={setUnit}
        />
        <DatosAire datosHoy={datosHoy} unit={unit} />
      </div>
    </div>
  );
}
