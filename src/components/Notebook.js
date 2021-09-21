import React from 'react'
import {AiFillBook}  from "react-icons/ai";
import {ImFilesEmpty}  from "react-icons/im";

export const Notebook = ({notebook}) => {
    return (
        <div className=" group flex flex-col justify-between bg-white square h-full rounded-lg p-4 pb-2 shadow-xl border-4 border-white hover:bg-orange-500 hover:border-orange-500 ">
        <div className="">
            <div className="flex space-x-2 text-gray-900 text-2xl font-bold items-center"><AiFillBook/>
                <span>{notebook.notebook_name}</span>
            </div>
            <div className="text-md py-2 text-gray-500 group-hover:text-gray-50">{notebook.notebook_desc}</div>
        </div>
        <div className="flex justify-end ">
            <div className="flex align-middle space-x-1 text-gray-500 font-semibold p-1 mt-2 text-sm group-hover:text-gray-50">
                <ImFilesEmpty/>
                <span>12</span>
            </div>
        </div>
    </div>

    )
}
