import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Inter } from "next/font/google";
import ToasterProvider from "@/providers/TasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PurrCoffee",
  description: "Best Coffee available",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
