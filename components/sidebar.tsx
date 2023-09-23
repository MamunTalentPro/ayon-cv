import Image from 'next/image';
import { useState } from 'react';
export default function Sidebar(){
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("afrinatasmimkeya274@gmail.com");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

    return (
      <div className="bg-teal-800 text-white w-80 px-2 rounded-l-lg ">
        <div className="pt-10">
          <Image  src="/ayon.jpeg" alt="Picture of Mamun" className="rounded-full mx-auto h-24" width={100} height={50} />
        </div>
        <div className="mt-10 mx-5 space-y-2">
          <p className="text-xl w-44">Permanent Address</p>

        
          <div className="flex space-x-2">
            <Image src="/location-white.png" alt="Picture of Mamun" width={20} height={20} />
            <p className="text-md">Charghat,Rajshahi,Bangladesh</p>
          </div>
        </div>

        <div className="mt-6 mx-5">
          <p className="text-xl">Computer Skills</p>
          <p>Ms Word</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "75%" }} />
          </div>
          <p>MS Power-Point</p>
          <div className="w-32 bg-gray-600  h-2 mb-4 dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "70%" }} />
          </div>
        </div>

        <div className="mt-6 mx-5">
          <p className="text-xl">Skills</p>

          <p>Leadership</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "95%" }} />
          </div>
          <p>Teamwork</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "95%" }} />
          </div>
          <p>Creativity</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "95%" }} />
          </div>
          <p>Communication</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "95%" }} />
          </div>
          <p>Time Management</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "95%" }} />
          </div>
          <p>Work Ethic</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "95%" }} />
          </div>
          <p>Adaptibility</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "90%" }} />
          </div>
        </div>

        <div className="mt-6 mx-5">
          <p className="text-xl">Languages</p>
          <p>English</p>
          <div className="w-32 bg-gray-600  h-2  dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "75%" }} />
          </div>
          <p>Bangla</p>
          <div className="w-32 bg-gray-600  h-2 mb-4 dark:bg-gray-700">
            <div className="bg-white h-2 " style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    )
}
