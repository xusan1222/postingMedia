import React from "react";
import { Link } from "react-router-dom";

export default function sideBar(blur) {

  // const bluring = blur
  // console.log('this is blurrrrrrrrrrrrrrrrrrRRRRRRRRRRRRRRRRRRRRRR  , ' , blur.blur)
  return (
    
    <div className={blur.blur ? 'w-[20%] h-auto overflow-y-scroll  flex flex-col items-start fixed top-[10%]   no-scrollbar border-r-sky-600 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] blur' : 'w-[20%] h-auto overflow-y-scroll  flex flex-col items-start fixed top-[10%]   no-scrollbar border-r-sky-600 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'}>
      {/* <h1 className="text-3xl ml-4 font-semibold ci">Types</h1> */}
  
     <button className='h-12 border-2 border-blue-400 w-[90%] rounded-md m-2 bg-blue-600 text-white hover:bg-white hover:text-blue-400'>
     <Link to='/it' >   IT </Link>
       </button>
      <button className="h-12 border-2 border-blue-400 w-[90%] rounded-md m-2 bg-blue-600 text-white hover:bg-white hover:text-blue-400"> <Link to='/medcine' >   MEDICINE </Link></button>
      <button className="h-12 border-2 border-blue-400 w-[90%] rounded-md m-2 bg-blue-600 text-white hover:bg-white hover:text-blue-400"> <Link to='/sport' >   SPORT </Link></button>
      <button className="h-12 border-2 border-blue-400 w-[90%] rounded-md m-2 bg-blue-600 text-white hover:bg-white hover:text-blue-400"> <Link to='/other' >OTHER... </Link></button>
      
    </div>
  );
}
