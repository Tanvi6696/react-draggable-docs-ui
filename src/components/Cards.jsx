import React from 'react'
import { FaFileAlt } from "react-icons/fa"
import { LuDownload } from "react-icons/lu"
import { IoMdClose } from "react-icons/io";
import { motion} from "framer-motion";

function Cards({ data, reference }) {
  return (
    <motion.div 
    drag 
    dragConstraints={reference}
    whileDrag={{ scale: 1.1 }} 
    dragElastic={0.1} 
    dragTransition={{bounceStiff: 100, bounceDamping: 50 }}
    className="relative flex-shrink-0 w-68 h-80 rounded-[50px] bg-zinc-900/90 text-white py-7 px-5 overflow-hidden">

      <span className="w-5 h-3 flex items-center justify-center">
        <FaFileAlt size="0.8em" />
      </span>

      <div className="leading-tight py-6 text-xs font-semibold h-[50%]">
        {data.desc}
      </div>

      <div className="footer absolute bottom-0 left-0 w-full h-[30%]">

        <div className="flex items-center justify-between h-[30%] px-5">
          <h3 className="text-sm ">{data.filesize}</h3>
          <span className="w-6 h-6 bg-zinc-200 rounded-full flex items-center justify-center">
            {data.close ? <IoMdClose/>:<LuDownload size="0.7em" color="#000" />}
          </span>
        </div>
        {data.tag.isopen && (
            <div className={`tag w-full ${data.tag.tagColor==="blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                <p className="w-[80%] text-[clamp(5px,.5vw,9px)] justify-center font-xs text-white text-center leading-none">{data.tag.tagTitle}</p>
            </div>
            )}
      </div>
  </motion.div>
    );
}
export default Cards
