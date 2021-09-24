import React from 'react'
import {SkeletonElement} from './SkeletonElement'

export const SkeletonNotebook=()=> {
    return (
        <div className="box-content bg-white w-full rounded-lg">
                <div className="p-2 sm:p-4 flex flex-col justify-between h-full animate-pulse">
                    <div className="w-full">
                        <SkeletonElement type="title"/>
                        <SkeletonElement type="text"/>
                        <SkeletonElement type="text"/>
                        <div className="hidden sm:block">
             <SkeletonElement type="text"/>

             </div>
                    </div>
                <div className="mt-2 sm:mt-4 w-1/5 place-self-end ">
                    <SkeletonElement type="text"/>

                </div>
                </div>
        </div>

    )
}
