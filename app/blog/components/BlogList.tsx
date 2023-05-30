'use client'

import { setLoadPager } from "@/app/store/appSlice"
import { AppDispatch } from "@/app/store/store"
import { url_blog } from "@/options/fetches"
import { blogType } from "@/options/types"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import BlogItem from "./BlogItem"
import styles from "./Blog.module.scss"

interface IBlogList {
  list: blogType[]
  limit: number
}

const BlogList: React.FC<IBlogList> = ({ list, limit }) => {
  const [posts, setPosts] = useState<blogType[]>(list)
  const dispatch = useDispatch<AppDispatch>()
  const searchParams = useSearchParams()
  const searchURI = searchParams.toString()
  const isLimit = searchURI.includes('limit=')
  const defaultLimit = isLimit ? `&${searchURI}` : `&limit=${limit}`

  useEffect(() => {
    fetch(`${url_blog}?ordering=-id${defaultLimit}`)
      .then(response => response.json())
      .then(data => {
        setPosts(data.results)
        dispatch(setLoadPager(false))
      })
  }, [searchURI])

  return (
    <div className={styles.blogList}>
      {posts.map(post => <BlogItem key={post.id} post={post} />)}
    </div>
  )
}

export default BlogList