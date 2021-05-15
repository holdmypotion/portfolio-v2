import Head from "next/head";
import Image from "next/image";
import HeroSection from "../components/home/heroSection";
import ProjectSection from "../components/home/projectSection";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <ProjectSection />
      <div style={{ height: "100vh", backgroundColor: "#2E2E2E" }}></div>
    </div>
  );
}