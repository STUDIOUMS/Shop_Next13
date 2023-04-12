'use client'

import { useCallback, useState } from "react"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/app/store/store"
import { setLoadPager } from "@/app/store/appSlice"

interface ILoadmore {
  pages: number
  all: string
}

const Loadmore: React.FC<ILoadmore> = ({ all, pages }) => {
  const load = useSelector((state: RootState) => state.app.loadPager)
  const dispatch = useDispatch<AppDispatch>()
  
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  // setLoadmore
  const setLoadmore = useCallback(() => {
    const params = new URLSearchParams(searchParams)
    const limitExists = params.get('_limit')
    const limit = limitExists ? Number(limitExists) + pages : pages * 2
    params.set('_limit', limit.toString())
    return params.toString()
  }, [searchParams])

  // loadmoreHandler
  const loadmoreHandler = () => {
    const uri = setLoadmore()
    router.push(pathname + '?' + uri)
    dispatch(setLoadPager(true))
  }


  // hide if there's no need
  const urlLimit = searchParams.get('_limit') ? Number(searchParams.get('_limit')) : pages

  if ( urlLimit! >= Number(all) ) {
    return null
  }

  return (
    <div className="text-center mb-4">
      <button className="btn btn-outline-success" onClick={loadmoreHandler}>
        Load more
        {load && <span className="spinner-border spinner-border-sm ms-2"></span>}
      </button>
    </div>
  )
}

export default Loadmore