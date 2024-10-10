import { Skeleton } from "@/components/ui/skeleton";
export const SkeletonComp = () => {
  return (
    <div className="w-full px-24 py-10 flex flex-col items-center gap-3">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 w-full border rounded-sm p-4"
        >
          <div className="grid grid-cols-2">
            <div className="flex items-center gap-2">
              <Skeleton className="w-14 h-14" />
              <div className="flex flex-col gap-1">
                <Skeleton className="w-24 h-4 rounded-full" />
                <Skeleton className="w-32 h-4 rounded-full" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <Skeleton className="w-16 h-4 rounded-full" />
                <div className="flex items-center gap-4">
                  <Skeleton className="w-32 h-4 rounded-full" />
                  <Skeleton className="w-16 h-4 rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex items-center gap-2">
              <Skeleton className="w-14 h-14" />
              <div className="flex flex-col gap-1">
                <Skeleton className="w-24 h-4 rounded-full" />
                <Skeleton className="w-32 h-4 rounded-full" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <Skeleton className="w-16 h-4 rounded-full" />
                <div className="flex items-center gap-4">
                  <Skeleton className="w-32 h-4 rounded-full" />
                  <Skeleton className="w-16 h-4 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
