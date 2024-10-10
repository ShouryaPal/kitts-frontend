import { create } from "zustand";

type Airport = {
  name: string;
  code: string;
  city: string;
  country: string;
};

interface FlightState {
  fromAirport: Airport | null;
  toAirport: Airport | null;
  departureDate: Date | null;
  returnDate: Date | null;
  setFromAirport: (airport: Airport | null) => void;
  setToAirport: (airport: Airport | null) => void;
  setDepartureDate: (date: Date | null) => void;
  setReturnDate: (date: Date | null) => void;
}

const useFlightStore = create<FlightState>((set) => ({
  fromAirport: null,
  toAirport: null,
  departureDate: null,
  returnDate: null,
  setFromAirport: (airport) => set({ fromAirport: airport }),
  setToAirport: (airport) => set({ toAirport: airport }),
  setDepartureDate: (date) => set({ departureDate: date }),
  setReturnDate: (date) => set({ returnDate: date }),
}));

export default useFlightStore;
