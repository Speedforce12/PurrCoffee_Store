import { clsx } from "clsx"
import Stripe from "stripe";
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});


export const getDateFromString = (str) => {
  const [date, time] = str.split(" ");
  // reformat string into YYYY-MM-DDTHH:mm:ss.sssZ
  str = `${date}T${time}.000Z`;
  return new Date(str);
};
