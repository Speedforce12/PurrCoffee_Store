import Navbar from "@/components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className='max-w-7xl mx-auto px-5'>{children}</main>
    </>
  );
}
