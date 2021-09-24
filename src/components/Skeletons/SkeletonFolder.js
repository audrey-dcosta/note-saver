import React from 'react'
import { SkeletonElement } from './SkeletonElement'
import {Shimmer} from './Shimmer'

export default function SkeletonFolder() {
    return (
        <div className={`skeleton-wrapper square bg-gray-50`}>
            <div className="skeleton-folder m-0 ">
                <SkeletonElement type="title"></SkeletonElement>
                <SkeletonElement type="text"></SkeletonElement>
                <SkeletonElement type="text"></SkeletonElement>
            </div>
            <Shimmer></Shimmer>
        </div>
    )
}
