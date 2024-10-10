import { create } from "zustand";

interface SheetStore {
  isSheetOpen: boolean;
  openSheet: () => void;
  closeSheet: () => void;
}

const useSheetStore = create<SheetStore>((set) => ({
  isSheetOpen: false,
  openSheet: () => set({ isSheetOpen: true }),
  closeSheet: () => set({ isSheetOpen: false }),
}));

export default useSheetStore;
