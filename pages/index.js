import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <div className="bodyInfo">
        <p>Just a regular project for a regular portfolio</p>
      </div>
      <div className="bodyProducts"></div>
    </div>
  );
}
