"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from './ui/button'
import { useState } from 'react'

const MenuFilters = ({ category }) => {
  const [selectedCategory, setSelectedCategory] = useState("")
  const searchParams = useSearchParams();
  const router = useRouter()
  const currCategory = searchParams.get("category")
  const handleCategory = () => {
    router.push(`/menu?category=${category.id}`);
    setSelectedCategory(category.id)

  }

  return (
    <div>
      <Button
        variant='outline'
        className={`rounded-full hover:bg-[#FFA16C] ${
          selectedCategory === currCategory && "bg-[#FFA16C] text-white"
        } hover:text-white hover:transition-colors hover:duration-300  w-40 `}
        onClick={handleCategory}>
        {category.name}
      </Button>
    </div>
  );
}

export default MenuFilters