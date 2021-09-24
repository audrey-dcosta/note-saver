import React from 'react'
import { SkeletonElement } from './SkeletonElement'
import { Shimmer} from './Shimmer'

export const SkeletonArticle = ({theme}) => {
    const themeClass=theme || 'light'
    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-article">
                <SkeletonElement type="title"></SkeletonElement>
                <SkeletonElement type="text"></SkeletonElement>
                <SkeletonElement type="text"></SkeletonElement>
            </div>
            <Shimmer></Shimmer>
        </div>
    )
}
