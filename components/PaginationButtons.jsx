"use client";

import { Button } from "./ui/button";
import qs from "query-string";


const PaginationButtons = () => {

    const handlePrev = (categoryId) => {
      const query = { categoryId };
      const url = qs.stringifyUrl(
        {
          url: window.location.href,
          query,
        },
        { skipNull: true }
      );

      router.push(url);
    };


    const handleNext = (categoryId) => {
      const query = { page };
      const url = qs.stringifyUrl(
        {
          url: window.location.href,
          query,
        },
        { skipNull: true }
      );

      router.push(url);
    };
  return (
    <div className='flex items-center justify-center gap-5'>
      <Button className='w-20' variant='outline' onClick={handlePrev}>
        Previous
      </Button>

      <Button className='w-20' variant='outline' onClick={handleNext}>
        Next
      </Button>
    </div>
  );
};

export default PaginationButtons;
