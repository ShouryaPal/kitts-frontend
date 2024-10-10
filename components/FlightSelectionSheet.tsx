"use client";
import React, { useState, useEffect } from "react";
import { ArrowLeft, Circle, Clock4 } from "lucide-react";
import { Button } from "@/components/ui/button";
import useFlightSelectionSheetStore from "@/hooks/useFileSelectionSheet";
import { Separator } from "./ui/separator";
import Image from "next/image";

const FlightSelectionSheet: React.FC = () => {
  const { isOpen, closeSheet } = useFlightSelectionSheetStore();
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
    } else {
      const timer = setTimeout(() => setIsRendered(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isRendered) return null;

  return (
    <div
      className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-50 flex items-stretch justify-end p-4 font-custom ${
        isOpen ? "bg-opacity-50" : "bg-opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white w-[400px] sm:w-[540px] rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out overflow-hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col overflow-y-auto gap-6">
          <div className="flex items-center mb-4">
            <Button
              onClick={closeSheet}
              variant="ghost"
              size="icon"
              className="hover:bg-gray-200 rounded-full mr-4 border-2 bg-[#F5F7FA]"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </div>
          <p className="text-black font-medium text-xl">Flight details</p>
          <Separator />
          <div className="flex flex-col gap-2">
            <p className="text-xs text-[#787B80] flex items-center gap-2">
              <Circle width={12} height={12} className="text-[#000C0B]" /> Sat
              28 Sept • 2:15
            </p>
            <div className="pl-[5px] flex items-start justify-between">
              <div className="flex gap-3">
                <div className="w-[1px] h-16 bg-[#000C0B]" />
                <p className="text-sm font-medium text-[#001F1D]">
                  DXB • Dubai International Airport
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Image
                  src={"/second.svg"}
                  alt="second-img"
                  width={28}
                  height={28}
                  className="border p-1"
                />
                <div className="flex flex-col  gap-1 text-[#484A4D] text-xs">
                  <p>Saudi Arabian Airlines • SV553</p>
                  <p>Economy • A330</p>
                  <p>Flight time 3h 45m</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-[#787B80] flex items-center gap-2">
              <Circle width={12} height={12} className="text-[#000C0B]" /> Sat
              28 Sept • 2:15
            </p>
            <div className="pl-[5px] flex gap-3">
              <div className="w-[1px] h-24 border-[1px] border-dashed border-[#787B80]" />
              <div className="flex flex-col items-start">
                <p className="font-medium text-sm text-[#001F1D]">
                  RUH • King Khalid International Airport
                </p>
                <div className="p-8 text-[#787B80] flex items-center gap-2 text-sm ">
                  <Clock4 width={14} height={14} />
                  Layover 2h 25m
                </div>
              </div>
            </div>
            <p className="text-xs text-[#787B80] flex items-center gap-2">
              <Circle width={12} height={12} className="text-[#000C0B]" /> Sat
              28 Sept • 2:15
            </p>
            <div className="pl-[5px] flex items-start justify-between">
              <div className="flex gap-3">
                <div className="w-[1px] h-16 bg-[#000C0B]" />
                <p className="font-medium text-sm text-[#001F1D]">
                  RUH • King Khalid International Airport
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Image
                  src={"/second.svg"}
                  alt="second-img"
                  width={28}
                  height={28}
                  className="border p-1"
                />
                <div className="flex flex-col  gap-1 text-[#484A4D] text-xs">
                  <p>Saudi Arabian Airlines • SV553</p>
                  <p>Economy • A330</p>
                  <p>Flight time 3h 45m</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-[#787B80] flex items-center gap-2">
              <Circle width={12} height={12} className="text-[#000C0B]" /> Sat
              28 Sept • 2:15
            </p>
            <div className="pl-4 ml-1">
              <p className="font-medium text-sm text-[#001F1D]">
                CDG • Paris - Charles de Gualle Airport
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSelectionSheet;
