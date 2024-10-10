"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, CircleCheck } from "lucide-react";
import useFlightSelectionSheetStore from "@/hooks/useFileSelectionSheet";
import FlightSelectionSheet from "@/components/FlightSelectionSheet";
import { Card } from "@/components/ui/card";
import Image from "next/image";

import { ScrollArea } from "@/components/ui/scroll-area";
import { FlightInfo } from "@/components/FlightInfo";
import FlightSearchBar from "@/components/FlightSearchBar";
import { useRouter } from "next/navigation";
import { SkeletonComp } from "@/components/SkeletonComp";
import { LoadingStep } from "@/components/LoadingSteps";

const Page: React.FC = () => {
  const { openSheet: openFlightSelectionSheet } =
    useFlightSelectionSheetStore();
  const [loadingStep, setLoadingStep] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const steps = [1, 2, 3, 4];
    const stepDuration = 2000;

    steps.forEach((step, index) => {
      const timer = setTimeout(() => {
        setLoadingStep(step);
      }, stepDuration * index);

      return () => clearTimeout(timer);
    });
  }, []);

  const handleClose = () => {
    router.push("/");
  };

  return (
    <main className="flex flex-col h-screen font-custom">
      <FlightSearchBar loadingStep={loadingStep} onClose={handleClose} />

      <ScrollArea className="flex-1 relative">
        {loadingStep < 4 ? (
          <>
            <SkeletonComp />
            <div className="absolute inset-0 flex items-center justify-center bg-transparent">
              <Card className="flex flex-col gap-3 p-6">
                <div className="flex items-center justify-center">
                  <Image
                    src="/loader.gif"
                    alt="loader"
                    width={150}
                    height={150}
                    unoptimized
                  />
                </div>
                <LoadingStep
                  step={1}
                  currentStep={loadingStep}
                  text="Searching 400+ flights"
                />
                <LoadingStep
                  step={2}
                  currentStep={loadingStep}
                  text="Attaching company rules"
                />
                <LoadingStep
                  step={3}
                  currentStep={loadingStep}
                  text="Serving best results"
                />
              </Card>
            </div>
          </>
        ) : (
          <div className="px-24 py-10 flex flex-col gap-3 w-full">
            <h1 className="text-lg leading-4 text-[#787B80]">
              Showing 2 of 767 results
            </h1>
            <div className="flex items-stretch w-full border rounded-sm hover:bg-primary-foreground">
              <div className="w-[65%] p-8 flex flex-col gap-8 border-r">
                <FlightInfo
                  date="Thu 25 Jun"
                  airline="Emirates • AT 4334"
                  time="9:45 AM - 11:45 AM"
                  route="CDG - DXB"
                  duration="7h 10min"
                  stops="Non stop"
                  image="/first.svg"
                />
                <FlightInfo
                  date="Sat 2 Jul"
                  airline="Emirates • AT 4334"
                  time="11:45 PM - 6:45 AM"
                  route="CDG - DXB"
                  duration="19h 10min"
                  stops="1 stop"
                  extraDay="1 day"
                  layover="Lisbon"
                  image="/second.svg"
                />
              </div>
              <div className="w-[35%] flex flex-col justify-end p-8 gap-6">
                <p className="text-sm text-[#787B80]">from</p>
                <p className="text-xl text-[#001F1D]">AED 1,456.90</p>
                <Button
                  className="w-full h-10 bg-[#003E39] text-white hover:bg-[#002a27] font-medium text-xl"
                  onClick={openFlightSelectionSheet}
                >
                  Select
                </Button>
              </div>
            </div>
            <div className="flex items-stretch w-full border rounded-sm hover:bg-primary-foreground">
              <div className="w-[65%] p-8 flex flex-col gap-8 border-r">
                <FlightInfo
                  date="Thu 25 Jun"
                  airline="Emirates • AT 4334"
                  time="9:45 AM - 11:45 AM"
                  route="CDG - DXB"
                  duration="7h 10min"
                  stops="1 stop"
                  image="/first.svg"
                />
                <FlightInfo
                  date="Sat 2 Jul"
                  airline="Emirates • AT 4334"
                  time="11:45 PM - 6:45 AM"
                  route="CDG - DXB"
                  duration="19h 10min"
                  stops="1 stop"
                  extraDay="2 day"
                  layover="Lisbon"
                  image="/second.svg"
                />
              </div>
              <div className="w-[35%] flex flex-col justify-end p-8 gap-6">
                <p className="text-sm text-[#787B80]">from</p>
                <p className="text-xl text-[#001F1D]">AED 1,456.90</p>
                <Button
                  className="w-full h-10 bg-[#003E39] text-white hover:bg-[#002a27] font-medium text-xl"
                  onClick={openFlightSelectionSheet}
                >
                  Select
                </Button>
              </div>
            </div>
          </div>
        )}
      </ScrollArea>
      <FlightSelectionSheet />
    </main>
  );
};

export default Page;
