import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Search, X } from "lucide-react";
import useSheetStore from "@/hooks/useSheetStore";
import useFlightStore from "@/hooks/useFlightStore";
import FlightSearchSheet from "@/components/FlightSearchSheet";
import { format } from "date-fns";

interface FlightSearchBarProps {
  loadingStep: number;
  onClose: () => void;
}

const FlightSearchBar: React.FC<FlightSearchBarProps> = ({
  loadingStep,
  onClose,
}) => {
  const { openSheet } = useSheetStore();
  const { fromAirport, toAirport, departureDate, returnDate } =
    useFlightStore();

  const formatDateRange = (start: Date | null, end: Date | null) => {
    if (!start || !end) return "";
    return `${format(start, "MMM dd")} - ${format(end, "MMM dd")}`;
  };

  return (
    <div className="relative">
      <div className="px-24 py-4 flex items-center justify-between border-b">
        <div
          className="border rounded-full p-2 flex items-center gap-2 cursor-pointer"
          onClick={openSheet}
        >
          <span className="leading-4 max-w-[175px] truncate">
            <strong className="font-medium">
              {fromAirport?.code || "N/A"}
            </strong>{" "}
            {fromAirport?.city || "Not selected"}
          </span>
          <Separator orientation="vertical" className="h-6 bg-gray-300" />
          <span className="leading-4 max-w-[175px] truncate">
            <strong className="font-medium">{toAirport?.code || "N/A"}</strong>{" "}
            {toAirport?.city || "Not selected"}
          </span>
          <Separator orientation="vertical" className="h-6 bg-gray-300" />
          <span className="font-medium">
            {formatDateRange(departureDate, returnDate)}
          </span>
          <Separator orientation="vertical" className="h-6 bg-gray-300" />
          <Button className="w-10 h-10 bg-[#E5EBEB] hover:bg-[#d0d6d6] flex items-center justify-center rounded-full p-0">
            <Search className="w-5 h-5 text-[#003E39]" />
          </Button>
        </div>
        <FlightSearchSheet />
        <Button
          className="w-10 h-10 border shadow-none bg-transparent hover:bg-[#d0d6d6] flex items-center justify-center rounded-full p-0"
          onClick={onClose}
        >
          <X className="w-5 h-5 text-[#003E39]" />
        </Button>
      </div>
      {loadingStep < 4 && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E5EBEB] overflow-hidden">
          <div className="h-full w-1/4 bg-[#3A688980] animate-loading-bar"></div>
        </div>
      )}
    </div>
  );
};

export default FlightSearchBar;
