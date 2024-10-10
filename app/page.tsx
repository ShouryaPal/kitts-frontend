"use client";
import { useRouter } from "next/navigation";
import { ArrowLeftRight, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/DatePicker";
import AirportSelector from "@/components/AirportSelector";

export default function Home() {
  const router = useRouter();
  const handleSearch = () => {
    router.push("/tickets");
  };

  return (
    <main className="h-screen w-screen bg-white flex flex-col font-custom">
      <div className="flex flex-col items-center justify-center">
        <div className="min-w-[70vw] h-[20vh] border-x-2 border-dashed flex items-center justify-between gap-2">
          <div className="w-1/3 h-full border-r-2 border-dashed border-[#E6E8EB]" />
          <div className="w-1/3 h-full border-dashed border-x-2 border-l-[#E6E8EB5E] border-r-[#E6E8EB] flex flex-col items-start justify-center">
            <h1 className="text-4xl text-[#000C0B] font-custom">
              Good afternoon, Brian
            </h1>
          </div>
          <div className="w-1/3 h-full border-l-2 border-dashed border-l-[#E6E8EB5E]" />
        </div>
        <Card className="min-w-[70vw]">
          <CardHeader>
            <Badge className="w-32 h-10 font-custom font-medium text-[#000C0B] bg-[#F5F7FA] rounded-sm hover:bg-white flex items-center justify-center border-none">
              Flights
            </Badge>
          </CardHeader>
          <CardContent className="flex items-center justify-between gap-3 flex-wrap">
            <AirportSelector placeholder="Where from?" type="from" />
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#F5F7FA] text-[#001F1D]">
              <ArrowLeftRight className="w-5 h-5" />
            </div>
            <AirportSelector placeholder="Where to?" type="to" />
            <div className="ml-4">
              <DatePicker placeholder="Departure" type="departure" />
            </div>
            <DatePicker placeholder="Return" type="return" />
          </CardContent>
          <CardFooter className="flex items-center justify-end">
            <Button
              className="w-56 h-10 bg-[#003E39] font-medium text-white flex items-center justify-center gap-2 hover:bg-[#003E39]"
              onClick={handleSearch}
            >
              <Search className="w-5 h-5" /> Search flights
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
