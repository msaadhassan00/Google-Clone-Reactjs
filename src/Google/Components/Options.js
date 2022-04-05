import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { googleContext } from '../Context/Context';

const Options = () => {


  


  return (
    <>
        <div className="options border-b-2 bg-[#202124]">
          <ul className="text-white md:w-1/2 md:ml-28 flex justify-around hover:cursor-pointer">
                <li className="hover:underline"> <Link to="/Search/All">All</Link></li>
                <li className="hover:underline"> <Link to="/Search/News">News</Link></li>
                <li className="hover:underline"> <Link to="/Search/Images">Images</Link></li>
                <li className="hover:underline"> <Link to="/Search/Videos">Videos</Link></li>
                <li className="hover:underline">Books</li>
                <li className="hover:underline">Search Tools</li>
            </ul> 
             
        </div>
    </>
  )
}

export default Options