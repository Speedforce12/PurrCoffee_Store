import axios from "axios";

const getProducts = async (id) => {
  
  const url = id
    ? `${process.env.NEXT_PUBLIC_URL}/api/product?id=${id}`
    : `${process.env.NEXT_PUBLIC_URL}/api/product`;
  const res = await axios.get(url);

  const categories = res.data;

  return categories;
};
export default getProducts;
