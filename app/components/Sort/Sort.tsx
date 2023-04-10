'use client'

import View from "@/app/components/View/View"
import { setLoadSort } from "@/app/store/appSlice"
import { AppDispatch, RootState } from "@/app/store/store"
import { SortItemType } from "@/options/types";
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from "./Sort.module.scss"

interface ISort {
  list: SortItemType[]
}

const Sort: React.FC<ISort> = ({ list }) => {
  const load = useSelector((state: RootState) => state.app.loadSort)
  const dispatch = useDispatch<AppDispatch>()

  // url params
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  
  // Handle
  const sortQuery = searchParams.get('_sort') || ''
  const orderQuery = searchParams.get('_order') || ''
  const valueQuery = (sortQuery.length && orderQuery.length)
    ? sortQuery + '-' + orderQuery
    : 'default'
  

  // searchParams with a provided key/value pair
  const createQueryString = useCallback((arr: string[]) => {
    const params = new URLSearchParams(searchParams)
    let defulatSort = arr.includes('default')
    
    params.set(arr[0], arr[1])
    params.set(arr[2], arr[3])

    if (defulatSort) {
      params.delete('_sort')
      params.delete('_order')
    }

    return params.toString()
  }, [searchParams])


  // sortHandler
  const sortHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const values = e.target.value.split('-')
    let uri = createQueryString(['_sort', values[0], '_order', values[1]])
    router.push(pathname + `?` + uri)
    dispatch(setLoadSort(true))
  }

  return (
    <div className={styles.sortbox}>
      <div className={styles.sortboxLeft}>
        <select className="form-select" onChange={sortHandler} defaultValue={valueQuery}>
          <option value="default">Сортировать</option>
          {list.map(el => <option key={el.value} value={el.value}>{el.name}</option>)}
        </select>
        {load && <div><span className={`spinner-border spinner-border-sm ${styles.sortboxSpinner}`}></span></div>}
      </div>
      <View />
    </div>
  )
}

export default Sort