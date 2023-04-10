'use client'

import CheckField from "@/app/components/CheckField/CheckField"
import Range from "@/app/components/Range/Range"
import { setLoadFilter } from "@/app/store/appSlice"
import { AppDispatch, RootState } from "@/app/store/store"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from './Filter.module.scss'

interface IFilter {}

/* fields */
type IFilterField = {
  title: string
  type: string
  value: string
}

const Filter: React.FC<IFilter> = () => {
  const [priceFrom, setPriceFrom] = useState<string>('')
  const [priceTo, setPriceTo] = useState<string>('')
  const [hit, setHit] = useState<boolean>(false)
  const load = useSelector((state: RootState) => state.app.loadFilter)
  const dispatch = useDispatch<AppDispatch>()

  // url params
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Queries
  const queryRangeFrom = searchParams.get('price_gte')
  const queryRangeTo = searchParams.get('price_lte')
  const queryHit = searchParams.has('hit')

  // setFilter
  const setFilter = useCallback((arr: any[]) => {
    const params = new URLSearchParams(searchParams)
    if (arr[0]) params.set('hit', arr[0])
    if (!arr[0]) params.delete('hit')

    params.delete('_limit')

    if (arr[1].length) params.set('price_gte', arr[1])
    if (arr[2].length) params.set('price_lte', arr[2])

    if (!arr[1].length) params.delete('price_gte')
    if (!arr[2].length) params.delete('price_lte')

    return params.toString()
  }, [searchParams])

  // filterHandler
  const filterHandler = () => {
    const uri: string = setFilter([hit, priceFrom, priceTo])
    router.push(pathname + '?' + uri)
    dispatch(setLoadFilter(true))
  }

  return (
    <div className={styles.filter}>
      <div className={styles.filterTitle}>Filter</div>
      <CheckField handler={setHit} title="Хит" type="checkbox" value="hit" name="hit" checked={queryHit} />
      <div className={styles.filterName}>Цена</div>
      <Range setPriceFrom={setPriceFrom} setPriceTo={setPriceTo} from={queryRangeFrom!} to={queryRangeTo!} />

      <button className="btn btn-block btn-primary" onClick={filterHandler}>
        Apply
        {load && <span className="spinner-border spinner-border-sm ms-2"></span>}
      </button>
    </div>
  )
}

export default Filter