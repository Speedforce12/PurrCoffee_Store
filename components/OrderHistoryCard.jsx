import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import { cn } from "@/lib/utils";

const OrderHistoryCard = ({ orders }) => {
  console.log(orders);

  return (
    <>
      {orders.map((order) => (
        <Card key={order.id}>
          <CardContent className='flex flex-col space-y-3 p-4'>
            {order.orderItems.map((item) => (
              <div
                className='flex items-center gap-x-2 space-y-2'
                key={item.id}>
                <div className='relative h-16 w-20 rounded-md'>
                  <Image
                    src={item.products.image}
                    fill
                    alt={item.products.name}
                    className='border rounded-md'
                  />
                </div>

                <div className='h-12 flex flex-col justify-between'>
                  <p className='text-sm text-gray-8 font-medium'>
                    {item.products.name}
                  </p>
                  <p className='text-xs text-neutral-400'>
                    ${item.products.price}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>

          <CardFooter className='flex items-center justify-between border-t'>
            <div className="flex  justify-between items-center w-full mt-2.5">
              <div className='-ml-3'>
                <span className='text-xs text-neutral-400 font-medium'>
                  Order# {order.id.split("-")[0]}
                </span>
                <p className='text-xs text-neutral-500'>
                  {order?.createdAt &&
                    format(parseISO(order.createdAt), "MMMM dd, yyyy")}
                </p>
              </div>

              <div className='flex items-center space-x-3'>
                <p
                  className={cn(
                    "text-xs text-neutral-500 font-medium rounded-full px-2.5 py-0.5 flex items-center justify-center",
                    order.paid
                      ? "text-green-300 bg-green-600"
                      : "text-rose-300 bg-rose-600"
                  )}>
                  {order.paid ? "Paid" : "Owing"}
                </p>
                <span className='font-bold text-black'>${order.amount}</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default OrderHistoryCard;
