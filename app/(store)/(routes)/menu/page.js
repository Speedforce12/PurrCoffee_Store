import getCategories from "@/actions/get-categories";
import {getProducts} from "@/actions/get-products";
import MenuFilters from "@/components/MenuFilters";
import PaginationButtons from "@/components/PaginationButtons";
import ProductCard from "@/components/ProductCard";


export const revalidate = 300 // revalidate at most every hour

const MenuPage = async ({ searchParams }) => {
  // get the category id from the search params
  const { categoryId, pages } = searchParams;    
  // const currPage = pages ? Number(pages) : 1;

  const currPage = typeof pages === "string" ? Number(pages) : 1

  // fetch the categories
  const categories = await getCategories();

  // fetch the products from the categories in url
  const products = await getProducts(categoryId, currPage);

  console.log(products.length);
  return (
    <div className='flex flex-col my-10 mx-auto  items-center justify-between h-screen'>
      <div>
        <div className='flex overflow-auto gap-4 w-full pb-3 mx-auto items-center'>
          <MenuFilters categories={categories} />
        </div>
        {products.length !== 0 ? (
          <div className='gap-5 w-full my-10 grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className='flex items-center justify-center mt-40'>
            <p className='font-bold text-xl'>
              No products available in selected category
            </p>
          </div>
        )}
      </div>
      {products.length !== 0 && (
        <div className='pb-6 pt-3'>
          <PaginationButtons currPage={currPage} products={products} />
        </div>
      )}
    </div>
  );
};

export default MenuPage;
