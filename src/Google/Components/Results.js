import React from 'react'

const Results = ({data}) => {
  let {title,description,link} = data
  //console.log(data)
  return (
    
      <div className="py-1 px-3 sm:w-3/5 md:pl-32">
        <a className="text-sm text-blue-300 md:" href={link} target="_blank ">
        <span>{link}</span>
        <p className=" text-blue-800 dark:text-blue-400 text-lg" >{title}</p>
        </a>
        
        <p className="line-clamp-2 text-sm text-gray-800 dark:text-gray-300">{description}</p>
    </div>
    
  )
}

export default Results