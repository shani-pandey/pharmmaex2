import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/src/components/header/header";
import BannerHome from "@/src/components/bannerHome/bannerHome";
import JoinPharma from "@/src/components/bannerHome/JoinPharma";
import AboutHome from "@/src/components/bannerHome/AboutHome";
import ExhibitionSeries from "@/src/components/bannerHome/ExhibitionSeries";
import WhatsInExhibition from "@/src/components/bannerHome/WhatsInExhibition";
import PharmaConnections from "@/src/components/bannerHome/PharmaConnections";
import EligibilityExhibitors from "@/src/components/bannerHome/EligibilityExhibitors";
import KeySponsors from "@/src/components/bannerHome/KeySponsors";
import OurExhibitors from "@/src/components/bannerHome/OurExhibitors";
import ClientReviews from "@/src/components/bannerHome/ClientReviews";
import Footer from "@/src/components/bannerHome/Footer";
import dynamic from "next/dynamic";
const RegisterDialog = dynamic(() => import("@/src/components/RegisterDialog"), { ssr: false });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
      
   
     
      </Head>
      <Header />
      <RegisterDialog />
      <BannerHome />
      <JoinPharma />
      <AboutHome />
      <ExhibitionSeries />
      <WhatsInExhibition />
      <PharmaConnections />
      <EligibilityExhibitors />
      <KeySponsors />
      <OurExhibitors />
      <ClientReviews />
      <Footer />
    </>
  )
}
