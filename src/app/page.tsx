import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";
import ClientPage from "@/components/ClientPage/ClientPage";
import Companies from "@/components/Companies/Companies";
import Management from '@/components/Management/Management'
import Associations from '@/components/Associations/Associations'
import InfoPage1 from '@/components/InfoPage1/InfoPage1'
import DataPage from '@/components/DataPage/DataPage'
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ClientPage />
      <Companies />
      <Management/>
      <Associations/>
      <InfoPage1/>
      <DataPage/>
    </>
  );
}
