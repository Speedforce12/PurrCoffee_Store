import Image from "next/image";

export default function Home() {
  return (
    <main className='relative h-screen w-full'>
      <div className='absolute inset-0'>
        <Image src='/landing_image.jpg' alt='home image' fill priority className="object-center" />
      </div>
    </main>
  );
}
