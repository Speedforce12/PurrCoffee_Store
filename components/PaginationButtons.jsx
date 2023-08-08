"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import qs from "query-string";

const PaginationButtons = ({ currPage, products }) => {
  const router = useRouter();

  const total_pages = Math.ceil(products.length / 9);
  console.log(total_pages);

  const handlePrev = (pages) => {
    const query = { pages };
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
    router.refresh();
  };

  const handleNext = (pages) => {
    const query = { pages };
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
    router.refresh();
  };
  return (
    <div className='flex items-center justify-center gap-5 mt-auto'>
      <Button
        disabled={currPage === 1}
        className='w-20'
        variant='outline'
        onClick={() => handlePrev(currPage > 0 ? currPage - 1 : 1)}>
        Previous
      </Button>

      <Button
        disabled={currPage === total_pages}
        className='w-20'
        variant='outline'
        onClick={() => handleNext(currPage + 1)}>
        Next
      </Button>
    </div>
  );
};

export default PaginationButtons;
