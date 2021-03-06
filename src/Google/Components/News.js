
const News = ({data}) => {
 

   let {title,summary,link,published} = data
    
  return (
 <div className="w-screen bg-[#202124]">
    <div className="py-1 px-3 sm:w-3/5 md:pl-32">
    <a className="text-sm text-blue-300 md:" href={link} target="_blank ">
    <span>{link}</span>
    <p className=" text-blue-800 dark:text-blue-400 text-lg" >{title}</p>
    </a>
    
    <p className="line-clamp-2 text-sm text-gray-800 dark:text-gray-300">{summary}</p>
    <p className='text-gray-500'>{published}</p>
</div> 
 </div>


  )
}

export default News