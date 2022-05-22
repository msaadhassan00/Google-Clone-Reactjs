import React, { useContext, useEffect, useRef } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { BsMic } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { googleContext } from "../Context/Context";

const Header = () => {
  const inputRef = useRef(null);

  const nav = useNavigate();

  const { value, setValue } = useContext(googleContext);
  //console.log(value, setValue)
  const handleSearch = (e) => {
    // console.log(inputRef.current.value);
    e.preventDefault();
    if (!inputRef.current.value) return;
    setValue(inputRef.current.value);
    //nav('/Search')
  };

  function goto(e) {
    nav("/");
  }
  function reset(e) {
   console.log("ok");
   inputRef.current.value = ''
  }

  function check(e) {
    if (e.keyCode === 13) {
      handleSearch(e);
    }
  }

  useEffect(() => {
    inputRef.current.value = value;
  });

  return (
    <>
      <div className="w-90 bg-[#202124] flex items-center">
        <div className="img">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
            className="w-28 hover:cursor-pointer  p-4"
            alt="logo"
            onClick={(e) => goto(e)}
          />
        </div>
        <div className="w-1/2 shadow-md rounded-full p-2 flex items-center text-white bg-[#303134]">
          <form action="" className="flex flex-grow items-center">
            <input
              type="text"
              ref={inputRef}
              onKeyDown={(e) => check(e)}
              className="focus:outline-none flex-grow bg-[#303134] "
            />
            <AiOutlineClose className="pr-2 hidden sm:flex text-xl cursor-pointer" onClick={(e)=>reset(e)} />
          </form>
          <div className="flex flex-none justify-evenly items-center md:border-l-2 w-16">
            <BsMic className="cursor-pointer hidden sm:flex text-lg" />
            <BiSearch className="cursor-pointer sm:flex text-lg" />
          </div>
        </div>
        <div className="right text-white flex items-center ml-auto p-5 text-lg">
          <div className="wrap flex items-center">
            <FiSettings className="hidden md:flex" />
            <p className="hover:bg-gray-500 hover:rounded-full h-10 w-10 flex items-center justify-center ">
              <p className="cursor-pointer text-2xl mt-0">
                <FiAlignJustify className="hidden md:flex" />
              </p>
            </p>
            <p className="hover:underline cursor-pointer text-2xl">
              <CgProfile />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
