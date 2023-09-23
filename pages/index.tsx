import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Sidebar from "@/components/sidebar";
import Summery from "@/components/summary";
import Experience from "@/components/experience";
import Contest from "@/components/co-curricollum";
import Projects from "@/components/academic";

export default function Home() {
  return (
    <div className="rounded-lg bg-slate-50">
      <Head>
        <title>Mst. Afrina Tasmim</title>
        <meta name="description" content="created by mamun" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-[792px] h-[1123px] mx-auto  mb-10 bg-slate-200 pr-4 rounded-lg">
        {/* <div className="flex "> */}
        <Sidebar />
        <div>
          <div className="bg-teal-800 h-16 rounded-r-full py-2 text-white  text-xl w-96  mt-16">
            <p className="font-semibold ml-20 text-xl  mt-2">Mst. Afrina Tasmim</p>
            {/* <p className="text-sm ml-14">Junior Software Engineer</p> */}
          </div>
          <div className="ml-14 flex-col space-y-4">
            <Summery />
            <Experience />
            <Contest />
            <Projects />
          </div>
        </div>
      </div>
    </div>
  )
}
