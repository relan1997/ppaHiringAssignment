import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero"
import Image from "next/image";
import ClientPage from '@/components/ClientPage/ClientPage'

export default function Home() {
  return (
    <><Navbar/>
      <Hero/>
      <ClientPage/>
    </>
  );
}
