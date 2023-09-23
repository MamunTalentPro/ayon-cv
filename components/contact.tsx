
import Image from 'next/image';
import { useState } from 'react';
export const Contact=()=>{
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("afrinatasmimkeya274@gmail.com");
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      };
    
    return <>
       <div className="mt-5 space-y-2">
          <p className="text-xl">Contact Info</p>

          <div className="flex space-x-2">

            <Image src="/email.png" alt="Picture of Mamun" width={20} height={20} />

            {/* <p className="text-xs cursor-pointer hover:underline">afrinatasmimkeya274@gmail.com</p> */}
            {!isCopied  && <p
              className= "text-xs cursor-pointer hover:scale-110 hover:underline"
              onClick={ handleCopy }
            >
             emrulkayeshayon@gmail.com
            </p>}
            { isCopied && <p className="text-xs">Copied!</p> }
          </div>
          <div className="flex space-x-2">

            <Image className='bg-black' src="/phone-call.png" alt="Picture of Mamun" width={20} height={20} />
            <p className="text-xs">01871775616</p>

          </div>
          <div className="flex space-x-2">
            <Image src="/location.png" alt="Picture of Mamun" width={20} height={20} />
            <p className="text-xs">Uttara,Sector 10,,Dhaka,Bangladesh</p>
          </div>
        </div></>
}