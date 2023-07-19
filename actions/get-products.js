import axios from "axios";

const getProducts = async (id) => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/product?id=${id}`;
  const res = await axios.get(url);

  const categories = res.data;

  return categories;
};
export default getProducts;
