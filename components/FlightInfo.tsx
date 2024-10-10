import Image from "next/image";

interface FlightInfoProps {
  date: string;
  airline: string;
  time: string;
  route: string;
  duration: string;
  stops: string;
  extraDay?: string;
  layover?: string;
  image: string;
}

export const FlightInfo: React.FC<FlightInfoProps> = ({
  date,
  airline,
  time,
  route,
  duration,
  stops,
  extraDay,
  layover,
  image,
}) => (
  <div className="flex flex-col gap-2">
    <h1 className="font-medium text-sm text-[#787B80]">{date}</h1>
    <div className="grid grid-cols-2">
      <div className="flex items-center gap-4">
        <Image src={image} alt="airline-logo" width={42} height={42} />
        <div className="flex flex-col gap-1">
          <p className="text-[#787B80] text-sm">{airline}</p>
          <p className="text-lg text-[#001F1D]">
            {time}
            {extraDay && (
              <sup className="text-red-500 text-xs ml-1">+{extraDay}</sup>
            )}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <p className="text-[#787B80] text-sm">{route}</p>
          <p className="text-[#787B80] text-sm">{layover}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg text-[#001F1D]">{duration}</p>
          <p className="text-lg text-[#001F1D]">{stops}</p>
        </div>
      </div>
    </div>
  </div>
);
