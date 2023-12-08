import React from 'react'
import { usePageData } from 'rspress/runtime'
import { BlogItem } from './BlogItem'

export default function Blog() {
    const info = usePageData()
    console.log("info", info)
    return <div>{
        info?.siteData?.pages?.filter(item => item.routePath.includes("/blog/")).map(item => <BlogItem item={item} />)}</div>
}