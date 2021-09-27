import React from 'react'
import {AiFillBook}  from "react-icons/ai";
import {ImFilesEmpty}  from "react-icons/im";
import {HiChevronRight} from 'react-icons/hi'
import {OptionsMenu} from './OptionsMenu'

export const Notebook = ({notebook,handleClick,delete_notebook,getNotebookById}) => {
    return (
        <div className="box-content bg-white w-full rounded-lg">
                <div className="p-2 sm:p-4 flex flex-col justify-between h-full ">
                    <div className="w-full flex justify-between  align-middle items-center">
                        <span className="font-semibold text-gray-800 text-2xl truncate">{notebook.notebook_name}</span>
                        <OptionsMenu delete_notebook={delete_notebook} id={notebook.notebook_id} getNotebookById={getNotebookById}/>
                    </div>
                <div className="mt-2 sm:mt-12 flex justify-end w-full ">
                    <button  onClick={()=>{handleClick(notebook.notebook_id)}} className="btn-solid flex items-center"><span>View</span><HiChevronRight className="ml-2 text-xl"/></button>

                </div>
                </div>
        </div>

    )
}
