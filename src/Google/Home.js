import React, { useContext, useRef } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { BsMic } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { googleContext } from './Context/Context';


const Home = () => {

    const inputRef = useRef(null)

   const nav = useNavigate();

   const { setValue } = useContext(googleContext)
//console.log(value, setValue)
    const handleSearch=(e)=>{
     // console.log(inputRef.current.value);
      e.preventDefault();
     if(!inputRef.current.value) return
     setValue(inputRef.current.value)
nav('/Search/All')
      //nav('/Search')
    }

    

    function check(e){
      if( e.keyCode === 13){
        handleSearch(e)
      }
    }
    

  return (
   <>
        <div className="w-90 h-screen flex flex-col justify-between bg-[#202124] text-white">
        {/* Top */}
        <div className="w-90 flex justify-end">
          <div className="w-48 flex justify-between items-center text-sm m-4">
            <p className="hover:underline cursor-pointer">Gmail</p>
            <p className="hover:underline cursor-pointer">Images</p>
            <p className="hover:bg-gray-500 hover:rounded-full h-10 w-10 flex items-center justify-center ">
              <p className="cursor-pointer text-2xl mt-0">
                <FiAlignJustify />
              </p>
            </p>
            <p className="hover:underline cursor-pointer text-2xl">
              <CgProfile />
            </p>
          </div>
        </div>

        {/* Center */}
        <div className="w-2/2  flex flex-col flex-grow items-center justify-center">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
            alt="logo"
            className="my-10"
          />
          <div className="w-2/2 sm:w-1/2 border-2 rounded-full p-2 flex items-center">
            <div className="flex-none w-5">
              <BiSearch className="cursor-pointer"
              onClick={(e)=>handleSearch(e)} 

              />
            </div>
            <form action="" className="flex flex-grow">
              <input
                type="text"
                ref={inputRef}
                onKeyDown={(e)=>check(e)}
                className="focus:outline-none overflow-hidden flex-grow bg-[#202124] "
              />
            </form>
            <div className="flex-none w-5">
              <BsMic className="cursor-pointer " />
            </div>
          </div>
          {/* Button Group */}
          <div className="items-center justify-between md:justify-evenly w-1/3 my-8 sm:w-1/3 flex " >
            <button className="bg-[#303134] p-2 rounded-md w-40 sm:text-sm" onClick={(e)=>handleSearch(e)}
             >
              Google Search
            </button>
            <button className="bg-[#303134] p-2 rounded-md hidden md:block w-40 sm:text-sm" onClick={(e) => {
      e.preventDefault();
      window.location.href='https://cdn.dribbble.com/users/833040/screenshots/5882614/media/d55f9d6469574adb08b11e42808364a9.png?compress=1&resize=400x300';
      }}
           
             >
              I'm Feeling Lucky
            </button>
           
          </div>
          <p className="text-sm">
            Google offered in: <span className="mx-2 text-[#8AB4F8] cursor-pointer hover:underline">اردو</span>
            <span className="text-[#8AB4F8] cursor-pointer hover:underline">پښتو</span>
            <span className="mx-2 text-[#8AB4F8] cursor-pointer hover:underline">سنڌي</span>
          </p>
        </div>
        {/* Footer */}
        <div className=" text-sm bg-[#171717]" >
           <div className="top border-b-2 border-[#212327]">
               <p className="ml-6 h-10 flex items-center">Pakistan</p>
           </div>
           <div className="flex sm:w-90 justify-between items-center p-5 flex-col sm:flex-row">
               <ul className="flex justify-around space-x-5 ">
                   <li className="cursor-pointer hover:underline">About</li>
                   <li className="cursor-pointer hover:underline">Advertising</li>
                   <li className="cursor-pointer hover:underline">Business</li>
                   <li className="cursor-pointer hover:underline">How Search Works</li>
               </ul>
               <ul className="flex  justify-around space-x-5"> 
                   <li className="cursor-pointer hover:underline">Privacy</li>
                   <li className="cursor-pointer hover:underline">Terms</li>
                   <li className="cursor-pointer hover:underline">Setting</li>
               </ul>
           </div>
        </div>
      </div> 
   </>
  )
}

export default Home