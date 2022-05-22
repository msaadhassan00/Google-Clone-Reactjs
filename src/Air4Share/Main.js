import React, { useRef } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { AiOutlineFileText } from "react-icons/ai";

const Main = () => {


    const inputRef = useRef(null)

    const handleSearch=(e)=>{
        console.log(inputRef.current.value);
       }
    const handleSearchClear=(e)=>{
        inputRef.current.value = '';
       }

  return (
    <div className="h-screen p-4 md:p-10 bg-[#F4F4F4]">
        {/* Top */}
        <div className="h-20 sm:h-32 flex justify-evenly items-center">
            <div className="w-1/3  pl-5 hidden sm:block">
                <div><img src="https://www.airforshare.com/assets/img/logo.svg" alt="logo" /></div>
            </div>
            <div className="w-1/3  pl-5 sm:hidden">
                <div><img src="https://www.airforshare.com/assets/img/logo-mini.svg" alt="logo" /></div>
            </div>
            <div className="w-2/3  hidden md:block">
                <ul className="md:flex md:items-center md:justify-around hover:cursor-pointer">
                    <li className="hover:underline text-sm">How it Works</li>
                    <li className="hover:underline text-sm">Download</li>
                    <li className="hover:underline text-sm">Upgrade</li>
                    <li className="hover:underline text-sm">Feedback</li>
                    <li className="text-[#AE9BFF] font-bold hover:underline">Login / Register</li>
                </ul>
            </div>
            <div className="w-2/3  md:hidden">
            <FiAlignJustify className="float-right text-xl mr-3" />
            </div>
        </div>
        {/* Hero */}
        <div className="bg-[#FFFFFF] h-2/3 sm:h-96">
            <div className="h-16  flex items-center">
            <FiAlignJustify className="text-[#AE9BFF] text-xl ml-5 hover:cursor-pointer"/> <h1 className="ml-5 text-xl font-extrabold italic">Text</h1>
            </div>
            <div className="h-2/3 flex">
            <AiOutlineFileText className="text-[#AE9BFF] text-xl ml-5 w-16 hover:cursor-pointer hidden md:block md:mt-5 md:pr-11"/>
            <textarea name="" id="" cols="100" rows="10" className="focus:outline-none p-4"
            ref={inputRef}
             placeholder='Type Something...'></textarea>
            </div>
            <div className='h-20 flex items-center float-right'>
                <button className='ml-4 border-2 w-28 h-10 text-[#AE9BFF]'
                onClick={(e)=>handleSearchClear(e)}>Clear</button>
                <button className='ml-4 mr-4 border-2 w-28 h-10 text-[#AE9BFF] '
                onClick={(e)=>handleSearch(e)}>Save</button>
            </div>
        </div>
    </div>
  )
}

export default Main