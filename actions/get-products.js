import axios from "axios";

export const getProducts = async (id, page) => {
  try {
    const url = id
      ? `${process.env.NEXT_PUBLIC_URL}/api/product?id=${id}&pages=${page}`
      : `${process.env.NEXT_PUBLIC_URL}/api/product?pages=${page}`;
    const res = await axios.get(url);

    const categories = res.data;
    return categories;
  } catch (error) {
    console.log("Failed to fetch products: " + error.message);
  }
};

export const getProductCount = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/product`);
    const products = res.data;

    return products
  } catch (error) {}
};
