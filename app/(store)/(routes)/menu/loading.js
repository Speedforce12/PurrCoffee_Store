import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className='flex flex-col my-10 mx-auto  items-center justify-center'>
      <div className='flex overflow-auto gap-4 w-full pb-3 mx-auto items-center'>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i}>
            <Skeleton className='w-32 rounded-full p-5' />
          </div>
        ))}
      </div>

      <div className='gap-5 w-full my-10 grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {Array.from({ length: 9 }).map((_, i) => (
          <Card key={i} className='h-64'>
            <Skeleton className='h-full w-full' />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default loading;
