import React from 'react'


const Images = ({data}) => {
    let {image,link} = data
   // console.log(data)
  return (
  
      <div className="w-1/2 ">
    <a href={link.href} target="_blank ">
    <img src={image.src} alt="" className="object-cover"  />
    {/* <p className=" text-blue-800 dark:text-blue-400 text-lg" >{title}</p> */}
    </a>
</div> 
  
  )
}

export default Images