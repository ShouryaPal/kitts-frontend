"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import useFlightStore from "@/hooks/useFlightStore";

interface DatePickerProps {
  placeholder: string;
  type: "departure" | "return";
  onChange?: (date: Date | null) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  placeholder,
  type,
  onChange,
}) => {
  const { departureDate, returnDate, setDepartureDate, setReturnDate } =
    useFlightStore();

  const date = type === "departure" ? departureDate : returnDate;
  const setDate = (newDate: Date | null) => {
    if (type === "departure") {
      setDepartureDate(newDate);
    } else {
      setReturnDate(newDate);
    }
    if (onChange) {
      onChange(newDate);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="w-40 h-12 border-2 shadow-none focus:ring-0 focus:ring-offset-0 flex items-center justify-between px-3 text-[#484A4D] bg-transparent hover:bg-transparent relative"
          type="button"
        >
          {date ? (
            <>
              <span className="absolute text-xs text-[#787B80] top-0.5 left-3">
                {placeholder}
              </span>
              <div className="flex items-center text-[#484A4D] w-full mt-2">
                <CalendarIcon className="w-5 h-5 text-[#C9CACC] mr-2" />
                <span>{format(date, "dd/MM/yyyy")}</span>
              </div>
            </>
          ) : (
            <div className="flex items-center text-[#484A4D] text-muted-foreground">
              <CalendarIcon className="w-5 h-5 text-[#C9CACC] mr-2" />
              {placeholder}
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date || undefined}
          onSelect={(newDate: Date | null) => setDate(newDate)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
