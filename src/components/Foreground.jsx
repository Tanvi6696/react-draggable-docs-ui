import React,{ useRef } from 'react'
import Cards from './cards'
function Foreground() {
  const ref=useRef(null);
 
    const data=[
      {
        desc:"This is the first card", 
        filesize: ".9mb",
        close:false, 
        tag:{ isopen:true, tagTitle:"Download Now", tagColor:"green"},
      },
      {
        desc:"This is the second card", 
        filesize: ".8mb",
        close:false, 
        tag:{ isopen:true, tagTitle:"Upload", tagColor:"blue"},
      },
      {
        desc:"This is the third card", 
        filesize: ".4mb",
        close:true, 
        tag:{ isopen:false, tagTitle:"Download Now", tagColor:"green"},
      },
    ];
    
    return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-screen flex gap-10 px-10 py-10 flex-wrap'> 
    {data.map((item,index)=>(
      <Cards data={item} reference={ref}/>))}
    </div>
  )
}

export default Foreground