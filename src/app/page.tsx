import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";
import ClientPage from "@/components/ClientPage/ClientPage";
import Companies from "@/components/Companies/Companies";
import Management from '@/components/Management/Management'
import Associations from '@/components/Associations/Associations'
import InfoPage1 from '@/components/InfoPage1/InfoPage1'
import DataPage from '@/components/DataPage/DataPage'
import InfoPage2 from '@/components/InfoPage2/InfoPage2'
import InfoPage3 from '@/components/InfoPage3/InfoPage3'
import Marketting from '@/components/Marketting/Marketting'
import Demo from '@/components/Demo/Demo'
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
      <InfoPage2/>
      <InfoPage3/>
      <Marketting/>
      <Demo/>
    </>
  );
}
