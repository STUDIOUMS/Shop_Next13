'use client'

import { useCallback } from "react"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { setLoadPager } from "@/app/store/appSlice"
import Btn from "./UI/Btn"
import { useAppDispatch, useAppSelector } from "../store/hooks"

interface ILoadmore {
  pages: number
  all: number
}

const Loadmore: React.FC<ILoadmore> = ({ all, pages }) => {
  const load = useAppSelector(state => state.app.loadPager)
  const dispatch = useAppDispatch()
  
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  // setLoadmore
  const setLoadmore = useCallback(() => {
    const params = new URLSearchParams(searchParams)
    const limitExists = params.get('limit')
    const limit = limitExists ? Number(limitExists) + pages : pages * 2
    params.set('limit', limit.toString())
    return params.toString()
  }, [searchParams, pages])

  // loadmoreHandler
  const loadmoreHandler = () => {
    const uri = setLoadmore()
    router.push(pathname + '?' + uri)
    dispatch(setLoadPager(true))
  }


  // hide if there's no need
  const urlLimit = searchParams.get('limit') ? Number(searchParams.get('limit')) : pages

  if ( urlLimit! >= Number(all) ) {
    return null
  }

  return (
    <div className="text-center">
      <Btn title={`Показать еще${load ? ' ...' : ''}`} handler={loadmoreHandler} />
    </div>
  )
}

export default Loadmore