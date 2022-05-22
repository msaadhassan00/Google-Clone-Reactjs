import React from 'react'
import { Link, useParams } from 'react-router-dom'
//import Fetching from './Components/Fetching'
import Header from './Components/Header'
import Fetching from './Components/Fetching'
import Options from './Components/Options'
import Results from './Components/Results'

const Search = () => {

  let { value } = useParams();
  console.log("Search File")
  return (
    <>
        <Header value={value}/>
        <Options value={value}/>
        <Fetching value={value}/>
       
    </>
  )
}

export default Search