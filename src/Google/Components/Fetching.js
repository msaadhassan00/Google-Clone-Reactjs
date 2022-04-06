import React, { useContext, useEffect, useState } from 'react'
import { googleContext } from '../Context/Context';
import Results from './Results';
import News from './News'
import { useParams } from 'react-router-dom';
import Images from './Images';
import Videos from './Videos';
import ClipLoader from "react-spinners/ClipLoader";





const Fetching = () => {

  const { value } = useContext(googleContext)
  const { option } = useParams();
  //console.log(option)
  const [results, setresults] = useState([])
  const [newsdata, setnewsdata] = useState([])
  const [imgResult, setimgResult] = useState([])
  const [vids, setvids] = useState([])
  const [loading, setloading] = useState(false)

  useEffect(() =>{
    setloading(true)
    setTimeout(() =>{
      setloading(false)
    },4000)
  },[option])
 
  
  let url = `https://google-search3.p.rapidapi.com/api/v1/search/q=${value}`;
  let NewsUrl = `https://google-search3.p.rapidapi.com/api/v1/news/q=${value}`
  let ImgUrl = `https://google-search3.p.rapidapi.com/api/v1/image/q=${value}`
  let vidsurl =  `https://google-search3.p.rapidapi.com/api/v1/video/q=${value}`

  let options = {
      method: 'GET',
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'EU',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
        'X-RapidAPI-Key': '17911df630msh5762bd5cd10aa51p1c70b9jsna4b24278ee58'
      },
    };

    const fetching = () => {
      fetch(url, options)
      .then((res) => res.json())
      .then((json) => setresults(json.results) )
      .catch((err) => console.error("error:" + err));

};
    const ImgFetch = () => {
      fetch(ImgUrl, options)
      .then((res) => res.json())
      .then((json) =>setimgResult(json.image_results) )
      .catch((err) => console.error("error:" + err));

};
    const FetchVids = () => {
      fetch(vidsurl, options)
      .then((res) => res.json())
      //.then((json) =>console.log(json) )
     .then((json) =>setvids(json.results) )
      .catch((err) => console.error("error:" + err));

};
//console.log(vids)
   const NewsFetch = () => {
          fetch(NewsUrl ,options)
          .then((res) => res.json())
         // .then((json) => console.log(json) )
          .then((json) => setnewsdata(json.entries) )
          .catch((err) => console.error("error:" + err));
   
  };

  //console.log(results)
      
 
  useEffect(() => {
    console.log('inside useffect');
    const unsub = () => {
      if(option == "News"){
          console.log('inside news')
          NewsFetch();
          
      }
      else if(option == "Images"){
      //  console.log('inside images')
        ImgFetch();
      }
      else if(option == "All"){
       // console.log('inside all')
        fetching();
        
      }
      else if(option == "Videos"){
        console.log('inside videos')
       FetchVids();
      }
     
       else return;
    };
   
    return unsub();
}, [value,option]);
     


   
    const RtrnAll = () =>{
      if(option=="All"){
       
        return (
          results?.map((result, index) => {
            return <Results data={result} key={index} />;
        })
        );
      }
      else if(option == "News"){
        return(
         newsdata?.map((ok, index)=>{
           return <News data={ok} key={index} />
         })
        )
      }
      else if(option == "Images"){
        return(
          imgResult?.map((result, index) => {
            return <Images data={result} key={index} />;
        })
        )
      }
      else if(option == "Videos"){
        return(
          vids?.map((result, index) => {
            return <Videos data={result} key={index} />;
        })
        )
      }
      
    }
    
    

  return (
   <div className="bg-[#202124] h-screen ">
    {loading? ( <div className="flex justify-center items-center h-screen"><ClipLoader color={"#123abc"} loading={loading}  size={150} /></div> ) : (<RtrnAll  />) }
   </div>
  )
}

export default Fetching