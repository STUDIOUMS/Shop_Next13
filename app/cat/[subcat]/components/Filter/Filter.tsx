'use client'

import CheckField from "@/app/components/CheckField/CheckField"
import Range from "@/app/components/Range/Range"
import { setLoadFilter } from "@/app/store/appSlice"
import { AppDispatch, RootState } from "@/app/store/store"
import { PackType } from "@/options/types"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from './Filter.module.scss'

/* fields */
type IFilterField = {
  title: string
  type: string
  value: string
}

interface IFilter {
  packs: PackType[]
}

const Filter: React.FC<IFilter> = ({ packs }) => {
  const dispatch = useDispatch<AppDispatch>()

  // url params
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Get and has queries
  const queryRangeFrom = searchParams.get('price_min')
  const queryRangeTo = searchParams.get('price_max')
  const queryHit = searchParams.has('hit')
  const querySale = searchParams.has('discount')
  const queryNew = searchParams.has('new')
  const queryPack = searchParams.get('pack')?.split(',')

  // State
  const [priceFrom, setPriceFrom] = useState<string>(queryRangeFrom || '')
  const [priceTo, setPriceTo] = useState<string>(queryRangeTo || '')
  const [chosenPacks, setChosenPacks] = useState<string[]>(queryPack || [])
  const [hit, setHit] = useState<boolean>(queryHit)
  const [sale, setSale] = useState<boolean>(querySale)
  const [newF, setNewF] = useState<boolean>(queryNew)
  const [resetAll, setResetAll] = useState<boolean>(false)
  const load = useSelector((state: RootState) => state.app.loadFilter)

  // setFilter
  const setFilter = useCallback((arr: any[]) => {
    const params = new URLSearchParams(searchParams)
    if (arr[2]) params.set('hit', arr[2])
    if (!arr[2]) params.delete('hit')

    if (arr[3]) params.set('discount', arr[3])
    if (!arr[3]) params.delete('discount')
    
    if (arr[4]) params.set('new', arr[4])
    if (!arr[4]) params.delete('new')
    
    if (arr[5]) params.set('pack', arr[5])
    if (!arr[5]) params.delete('pack')

    params.delete('ordering')
    params.delete('limit')

    if (arr[0].length) params.set('price_min', arr[0])
    if (arr[1].length) params.set('price_max', arr[1])

    if (!arr[0].length) params.delete('price_min')
    if (!arr[1].length) params.delete('price_max')

    return params.toString()
  }, [searchParams])

  // ChoosePack
  const choosePackes = (id: number) => {
    const packExist = chosenPacks.some(el => el === String(id))
    if (!packExist) {
      setChosenPacks(prev => [...prev, String(id)].sort())
    } else {
      setChosenPacks(prev => prev.filter(el => el !== String(id)))
    }
  }

  // filterHandler
  const filterHandler = () => {
    const packs = chosenPacks.join(',')
    const uri: string = setFilter([priceFrom, priceTo, hit, sale, newF, packs])
    router.push(pathname + '?' + uri)
    dispatch(setLoadFilter(true))
  }

  // resetFilterFunc
  const resetFilterFunc = () => {
    router.push(pathname)
    dispatch(setLoadFilter(true))
    setResetAll(true)
  }
  

  return (
    <div className={styles.filter}>
      <div className={styles.filterTitle}>Фильтр</div>
      
      <div className={styles.filterSection}>
        <CheckField handler={setHit} title="Хит" type="checkbox" value="hit" name="hit" checked={queryHit} handCheck={resetAll} />
        <CheckField handler={setSale} title="Скидка" type="checkbox" value="discount" name="discount" checked={querySale} handCheck={resetAll} />
        <CheckField handler={setNewF} title="Новинки" type="checkbox" value="new" name="new" checked={queryNew} handCheck={resetAll} />
      </div>

      <div className={styles.filterSection}>
        <div className={styles.filterName}>Цена</div>
        <Range setPriceFrom={setPriceFrom} setPriceTo={setPriceTo} from={queryRangeFrom!} to={queryRangeTo!} />
      </div>

      <div className={styles.filterSection}>
        <div className={styles.filterName}>Упаковка</div>
        {packs.map(el => {
          const checkedPack = queryPack?.some(i => Number(i) === el.id)
          return <CheckField key={el.id} handler={() => choosePackes(el.id)} title={el.name} type="checkbox" value={String(el.id)} name="pack" checked={checkedPack} handCheck={resetAll} />
        })}
      </div>

      <button className="btn btn-block btn-success mb-2" onClick={filterHandler}>
        Применить
        {load && <span className="spinner-border spinner-border-sm ms-2"></span>}
      </button>
      <button className="btn btn-block btn-outline-secondary" onClick={resetFilterFunc}>
        Сбросить
      </button>
    </div>
  )
}

export default Filter