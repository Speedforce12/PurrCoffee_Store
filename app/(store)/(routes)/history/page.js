import { GetUserOrders } from "@/actions/get-userOrder";
import OrderHistoryCard from "@/components/OrderHistoryCard";
import { currentUser } from "@clerk/nextjs";
import React, { Fragment } from "react";

const HistoryPage = async () => {
  const user = await currentUser();
  const orderHistory = await GetUserOrders(user.id);

  const formattedOrders = orderHistory.map((order) => ({
    id: order.id,
    phone: order.phone,
    address: order.address,
    amount: order.amount,
    paid: order.paid,
    products: order.orderItems.map((orderItem) => orderItem.products.name),
  }));

  console.log(formattedOrders.address);
  return (
    <div className='flex flex-col mt-5'>
      <div>
        <h1 className='font-bold md:text-2xl text-xl'>Order History</h1>
        <p className='text-sm text-gray-400 font-semibold'>
          View your previous Orders
        </p>
      </div>

      <div className='my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        <OrderHistoryCard orders={orderHistory} />
      </div>
    </div>
  );
};

export default HistoryPage;
