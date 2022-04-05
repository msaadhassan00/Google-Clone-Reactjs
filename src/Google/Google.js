import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Search from './Search';
import { ContextProvider } from './Context/Context';
import News from './Components/News';

const Google = () => {
  return (
   <>
       {/* <Home /> */}
       <Router>
       <ContextProvider>
         <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/Search/:option" element={<Search />}/>
           {/* <Route path="/Search/:useParams" element={<Search />}/> */}
         </Routes>
         </ContextProvider>
       </Router>
   </>
  )
}

export default Google