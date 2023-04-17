'use client'

import { setLoadPager } from "@/app/store/appSlice"
import { AppDispatch } from "@/app/store/store"
import { url_blog } from "@/options/helpers"
import { blogType } from "@/options/types"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import BlogItem from "./BlogItem"

interface IBlogList {
  list: blogType[]
  limit: number
}

const BlogList: React.FC<IBlogList> = ({ list, limit }) => {
  const [posts, setPosts] = useState<blogType[]>(list)
  const dispatch = useDispatch<AppDispatch>()
  const searchParams = useSearchParams()
  const searchURI = searchParams.toString()
  const isLimit = searchURI.includes('_limit=')
  const defaultLimit = isLimit ? '' : `&_limit=${limit}`

  useEffect(() => {
    fetch(`${url_blog}?_sort=date&_order=desc${defaultLimit}&${searchURI}`)
      .then(response => response.json())
      .then(data => {
        setPosts(data)
        dispatch(setLoadPager(false))
      })
  }, [searchURI])

  return (
    <div>
      {posts.map(post => <BlogItem key={post.id} post={post} />)}
    </div>
  )
}

export default BlogList