import React from 'react'
import { usePageData } from 'rspress/runtime'
import { BlogItem } from './BlogItem'
import '../../../theme/output.css'

export default function Blog() {
    const info = usePageData()
    console.log("info", info)
    return <div className='flex justify-center p-2'>{
        info?.siteData?.pages?.filter(item => item.routePath.includes("/blog/")).map(item => <BlogItem item={item} />)}</div>
}