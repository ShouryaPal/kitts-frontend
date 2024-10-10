import { create } from "zustand";

interface FlightSelectionSheetStore {
  isOpen: boolean;
  openSheet: () => void;
  closeSheet: () => void;
}

const useFlightSelectionSheetStore = create<FlightSelectionSheetStore>(
  (set) => ({
    isOpen: false,
    openSheet: () => set({ isOpen: true }),
    closeSheet: () => set({ isOpen: false }),
  }),
);

export default useFlightSelectionSheetStore;
