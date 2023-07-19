import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import MenuFilters from "@/components/MenuFilters";
import ProductCard from "@/components/ProductCard";
import React from "react";

export const revalidate = 60 // revalidate this page every 60 seconds

const MenuPage = async ({ searchParams }) => {
  const { category } = searchParams;
  const categories = await getCategories();
  const products = await getProducts(category);

  console.log(products);

  return (
    <div className='flex flex-col my-10 mx-auto  items-center justify-center'>
      <div className="grid md:grid-cols-4 gap-4 grid-cols-2">
        {categories.map((category) => (
          <MenuFilters key={category.id} category={category} />
        ))}
      </div>

      <div className="gap-5 w-full my-10 grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {
          products.map((product) => (

            <ProductCard key={product.id} product={ product} />
          ))
        }
      </div>
    </div>
  );
};

export default MenuPage;
