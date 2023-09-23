import Academic from "@/components/academic";
import Contest from "@/components/co-curricollum";
import { Contact } from "@/components/contact";
import Sidebar from "@/components/sidebar";
import Summery from "@/components/summary";
import Head from "next/head";

export default function Home() {
  return (
    <div className="rounded-lg bg-slate-50">
      <Head>
        <title>Emrul Kayesh Ayon</title>
        <meta name="description" content="created by mamun" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-[792px] h-[900px] mx-auto  mb-10 bg-slate-200 pr-4 rounded-lg">
        {/* <div className="flex "> */}
        <Sidebar />
        <div>
          <div className=" h-16 rounded-r-full py-2  text-xl w-96  mt-10">
            <p className="font-bold text-[#239ec4] text-4xl  mt-2 ml-14">Emrul Kayesh Ayon</p>
            {/* <p className="ml-14 text-[#239ec4] text-md ">UI/UX Designer</p> */}
           
          </div>
          <div className="ml-14 flex-col space-y-4 ">
          <Contact/>
            <Summery />
            <Academic />
            <Contest />
            
          </div>
        </div>
      </div>
    </div>
  )
}
