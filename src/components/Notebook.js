import React from 'react'
import {AiFillBook}  from "react-icons/ai";
import {ImFilesEmpty}  from "react-icons/im";

export const Notebook = ({notebook,handleClick}) => {
    return (
        <div onClick={()=>{handleClick(notebook.notebook_id)}} className="box-content bg-white w-full rounded-lg">
        <div className="p-2 sm:p-4 flex flex-col justify-between h-full">
            <div className="w-full">
            <div className="text-lg sm:text-2xl flex space-x-2 text-gray-900 font-bold items-center group-hover:text-gray-50"><AiFillBook/>
                 <span>{notebook.notebook_name}</span>
             </div>
            <div className="text-sm sm:text-md py-2 text-gray-500 group-hover:text-gray-50">{notebook.notebook_desc}</div>
                
            </div>
        <div className="mt-2 sm:mt-10 w-1/5 place-self-end ">
        <div className="flex align-middle space-x-1 text-gray-500 font-semibold p-1 mt-2 text-sm group-hover:text-gray-50">
                 <ImFilesEmpty/>
             <span>12</span>
             </div>

        </div>
        </div>
</div>
    //     <div onClick={()=>{handleClick(notebook.notebook_id)}} className=" group flex flex-col justify-between bg-white rounded-lg p-4 pb-2 shadow-xl border-4 border-white hover:bg-orange-550 hover:border-orange-550 ">
    //     <div className="">
    //         <div className="text-lg sm:text-2xl flex space-x-2 text-gray-900 font-bold items-center group-hover:text-gray-50"><AiFillBook/>
    //             <span>{notebook.notebook_name}</span>
    //         </div>
    //         <div className="text-sm sm:text-md py-2 text-gray-500 group-hover:text-gray-50">{notebook.notebook_desc}</div>
    //     </div>
    //     <div className="flex justify-end ">
    //         <div className="flex align-middle space-x-1 text-gray-500 font-semibold p-1 mt-2 text-sm group-hover:text-gray-50">
    //             <ImFilesEmpty/>
    //             <span>12</span>
    //         </div>
    //     </div>
    // </div>

    )
}
