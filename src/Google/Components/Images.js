import React from 'react'


const Images = ({data}) => {
    let {image,link} = data
   // console.log(data)
  return (
  
      <div className="bg-[#202124] flex flex-wrap">
    <a href={link.href} target="_blank ">
    <img src={image.src} alt="" className="pl-32"  />
    </a>
</div> 
  
  )
}

export default Images