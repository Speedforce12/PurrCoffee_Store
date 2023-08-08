"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import qs from "query-string";
import { cn } from "@/lib/utils";

const MenuFilters = ({ categories }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currCategory = searchParams.get("categoryId");

  const handleCategory = (categoryId) => {
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

  return (
    <>
      {/* resets the filter to show all products */}
      <Button
        variant='outline'
        className={cn(
          "rounded-full hover:bg-[#FFA16C] hover:text-white text-sm hover:transition-colors hover:duration-300  w-32",
          !currCategory ? "bg-[#FFA16C] text-white" : "text-black"
        )}
        onClick={() => handleCategory(undefined)}>
        All
      </Button>

      {/* displays all filter options */}
      {categories.map((category) => (
        <Button
          key={category.id}
          variant='outline'
          onClick={() => handleCategory(category.id)}
          className={cn(
            "rounded-full hover:bg-[#FFA16C] hover:text-white text-sm hover:transition-colors hover:duration-300  w-32",
            category.id === currCategory && "bg-[#FFA16C] text-white"
          )}>
          {category.name}
        </Button>
      ))}
    </>
  );
};

export default MenuFilters;
