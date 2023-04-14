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
  const [sale, setSale] = useState<boolean>(false)
  const [newF, setNewF] = useState<boolean>(false)
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
  const querySale = searchParams.has('sale')
  const queryNew = searchParams.has('new')

  // setFilter
  const setFilter = useCallback((arr: any[]) => {
    const params = new URLSearchParams(searchParams)
    if (arr[0]) params.set('hit', arr[0])
    if (!arr[0]) params.delete('hit')

    if (arr[3]) params.set('sale', arr[3])
    if (!arr[3]) params.delete('sale')
    
    if (arr[4]) params.set('new', arr[4])
    if (!arr[4]) params.delete('new')

    params.delete('_limit')

    if (arr[1].length) params.set('price_gte', arr[1])
    if (arr[2].length) params.set('price_lte', arr[2])

    if (!arr[1].length) params.delete('price_gte')
    if (!arr[2].length) params.delete('price_lte')

    return params.toString()
  }, [searchParams])

  // filterHandler
  const filterHandler = () => {
    const uri: string = setFilter([hit, priceFrom, priceTo, sale, newF])
    router.push(pathname + '?' + uri)
    dispatch(setLoadFilter(true))
  }

  return (
    <div className={styles.filter}>
      <div className={styles.filterTitle}>Фильтр</div>
      <CheckField handler={setHit} title="Хит" type="checkbox" value="hit" name="hit" checked={queryHit} />
      <CheckField handler={setSale} title="Скидка" type="checkbox" value="sale" name="sale" checked={querySale} />
      <CheckField handler={setNewF} title="Новинки" type="checkbox" value="new" name="new" checked={queryNew} />
      <div className={styles.filterName}>Цена</div>
      <Range setPriceFrom={setPriceFrom} setPriceTo={setPriceTo} from={queryRangeFrom!} to={queryRangeTo!} />

      <button className="btn btn-block btn-success" onClick={filterHandler}>
        Применить
        {load && <span className="spinner-border spinner-border-sm ms-2"></span>}
      </button>
    </div>
  )
}

export default Filter