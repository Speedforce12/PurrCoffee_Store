import axios from "axios";

export const GetUserOrders = async (userId) => {
  if (!userId) return;

  const url = `${process.env.NEXT_PUBLIC_URL}/api/order?userId=${userId}`;
  const res = await axios.get(url);

  const userOrders = res.data;

  return userOrders;
};
