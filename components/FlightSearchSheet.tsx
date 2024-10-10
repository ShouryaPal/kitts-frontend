import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/DatePicker";
import useSheetStore from "@/hooks/useSheetStore";
import useFlightStore from "@/hooks/useFlightStore";
import AirportSelector from "./AirportSelector";
import { ArrowLeftRight, Search } from "lucide-react";

const FlightSearchSheet: React.FC = () => {
  const { isSheetOpen, closeSheet } = useSheetStore();
  const { setDepartureDate, setReturnDate } = useFlightStore();

  const handleSearch = () => {
    // Implement search logic here
    closeSheet();
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={closeSheet}>
      <SheetContent
        side="top"
        className="h-[25vh] flex flex-col px-52 py-12 gap-8"
      >
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <AirportSelector placeholder="Where from?" type="from" />
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#F5F7FA] text-[#001F1D]">
            <ArrowLeftRight className="w-5 h-5" />
          </div>
          <AirportSelector placeholder="Where to?" type="to" />
          <div className="ml-4">
            <DatePicker
              placeholder="Departure"
              type="departure"
              onChange={(date) => setDepartureDate(date)}
            />
          </div>
          <DatePicker
            placeholder="Return"
            type="return"
            onChange={(date) => setReturnDate(date)}
          />
        </div>
        <div className="flex items-center justify-end">
          <Button
            className="w-56 h-10 bg-[#003E39] font-medium text-white flex items-center justify-center gap-2 hover:bg-[#003E39]"
            onClick={handleSearch}
          >
            <Search className="w-5 h-5" /> Search flights
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FlightSearchSheet;
