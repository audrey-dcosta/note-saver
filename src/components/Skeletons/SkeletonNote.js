import React from 'react'
import { SkeletonElement } from './SkeletonElement'

export const SkeletonNote = () => {
    return (
        <div className="p-3">
            <div className="animate-pulse">

            <div className="w-1/4 py-2">
                <SkeletonElement type="title"/>
            </div>
            {[1,2,3,4,5,6,7,8].map((i)=><NoteSingle key={i}/>)}
            </div>

        </div>
        
    )
}

const NoteSingle=()=>{
    return(
        <div className="box-content w-full rounded-lg py-3">
        <div className="w-full">
            <SkeletonElement type="title"/>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>

        </div>


    </div>
    )

}
