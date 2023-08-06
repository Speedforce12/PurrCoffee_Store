import Navbar from "@/components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className='sticky top-0 z-50'>
        <Navbar />
      </div>
      <main className='max-w-7xl mx-auto px-5'>{children}</main>
    </>
  );
}
