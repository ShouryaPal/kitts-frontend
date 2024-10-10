import React, { useState } from "react";
import { LocateFixed, ChevronDown } from "lucide-react";
import { data } from "../lib/data";
import useFlightStore from "@/hooks/useFlightStore";

type Airport = {
  name: string;
  code: string;
  city: string;
  country: string;
};
interface AirportSelectorProps {
  placeholder: string;
  type: "from" | "to";
}

const AirportSelector: React.FC<AirportSelectorProps> = ({
  placeholder,
  type,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { fromAirport, toAirport, setFromAirport, setToAirport } =
    useFlightStore();

  const selectedAirport = type === "from" ? fromAirport : toAirport;
  const setSelectedAirport = type === "from" ? setFromAirport : setToAirport;

  const handleSelect = (airport: Airport) => {
    setSelectedAirport(airport);
    setIsOpen(false);
  };

  return (
    <div className="relative w-60 font-custom">
      <div
        className="flex flex-col justify-center w-full h-12 px-3 border-2 rounded-md cursor-pointer bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedAirport && (
          <span className="text-xs text-gray-500 -mb-1">{placeholder}</span>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center text-[#001F1D]">
            <LocateFixed className="w-4 h-4 mr-2 text-gray-400" />
            <span>
              {selectedAirport
                ? `${selectedAirport.city} (${selectedAirport.code})`
                : placeholder}
            </span>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? "transform rotate-180" : ""}`}
          />
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
          {data.map((airport) => (
            <div
              key={airport.code}
              className="flex justify-between items-center p-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(airport)}
            >
              <div>
                <div className="text-sm text-[#2B2B2B]">{airport.city}</div>
                <div className="text-xs text-[#787B80]">{airport.country}</div>
              </div>
              <div className="text-sm text-[#2B2B2B]">{airport.code}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AirportSelector;
