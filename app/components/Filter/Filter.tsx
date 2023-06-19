'use client'

import { AppDispatch, RootState } from '@/app/store/store'
import { setLoadFilter, setLoadFilterReset } from '@/app/store/appSlice'
import { PackType } from '@/options/types'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckField from '../CheckField/CheckField'
import Range from '../Range/Range'
import styles from './Filter.module.scss'

interface IFilter {
  packs: PackType[]
}

const Filter: React.FC<IFilter> = ({ packs }) => {
  const dispatch = useDispatch<AppDispatch>()
  const load = useSelector((state: RootState) => state.app.loadFilter)
  const loadReset = useSelector((state: RootState) => state.app.loadFilterReset)

  // url params
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // getting of existing params
  const isHit = searchParams.has('hit') ? true : false
  const isDiscount = searchParams.has('discount') ? true : false
  const isNewf = searchParams.has('new') ? true : false
  const isPriceFrom = searchParams.get('price_min') || ''
  const isPriceTo = searchParams.get('price_max') || ''
  const isPack = searchParams.get('pack')?.split(',') || []

  // State
  const [hit, setHit] = useState<boolean>(isHit)
  const [discount, setDiscount] = useState<boolean>(isDiscount)
  const [newf, setNewf] = useState<boolean>(isNewf)
  const [priceFrom, setPriceFrom] = useState<string>(isPriceFrom)
  const [priceTo, setPriceTo] = useState<string>(isPriceTo)
  const [chosenPacks, setChosenPacks] = useState<string[]>(isPack)

  // isReset
  const isReset: boolean = (hit || discount || newf || priceFrom.length || priceTo.length || chosenPacks.length) ? false : true


  // setFilter
  const setFilter = useCallback((arr: any[]) => {
    const params = new URLSearchParams(searchParams)

    // removing sort and limit parameters
    params.delete('ordering');
    params.delete('limit');

    // setting parameters
    (arr[0]) ? params.set('hit', 'true') : params.delete('hit');
    (arr[1]) ? params.set('discount', 'true') : params.delete('discount');
    (arr[2]) ? params.set('new', 'true') : params.delete('new');
    (arr[3]) ? params.set('price_min', arr[3]) : params.delete('price_min');
    (arr[4]) ? params.set('price_max', arr[4]) : params.delete('price_max');
    (arr[5]) ? params.set('pack', arr[5]) : params.delete('pack');

    return params.toString()
  }, [searchParams])


  // applyFilter
  const applyFilter = () => {
    const uri: string = setFilter([hit, discount, newf, priceFrom, priceTo, chosenPacks.join(',')])
    router.push(pathname + '?' + uri)
    dispatch(setLoadFilter(true))
  }


  // resetFilter
  const resetFilter = () => {
    setHit(false)
    setDiscount(false)
    setNewf(false)
    setPriceFrom('')
    setPriceTo('')
    setChosenPacks([])
    router.push(pathname)
    dispatch(setLoadFilterReset(true))
  }


  // chooseFilterParam
  const chooseFilterParam = (check: any, val: string) => {
    if (val === 'hit') setHit(!hit)
    if (val === 'discount') setDiscount(!discount)
    if (val === 'new') setNewf(!newf)
  }
  

  // choosePackFunc
  const choosePackFunc = (check: boolean, id: string) => {
    const packExist = chosenPacks.some(el => el === id)
    if (!packExist) {
      setChosenPacks(prev => [...prev, id].sort())
    } else {
      setChosenPacks(prev => prev.filter(el => el !== id))
    }
  }


  return (
    <>
      <button className={styles.filterBtn}></button>
      
      <div className={styles.filter}>
        <div className={styles.filterTitle}>Фильтр</div>

        {/* <p>Hit: {hit}<br />
        Sale: {discount}<br />
        New: {newf}<br />
        Price: {priceFrom} - {priceTo}<br />
        Packs: {chosenPacks.join(',')}</p> */}
        
        <div className={styles.filterSection}>
          <CheckField handler={chooseFilterParam} title="Хит" type="checkbox" value="hit" name="hit" checked={hit} handCheck />

          <CheckField handler={chooseFilterParam} title="Скидка" type="checkbox" value="discount" name="discount" checked={discount} handCheck />
          
          <CheckField handler={chooseFilterParam} title="Новинки" type="checkbox" value="new" name="new" checked={newf} handCheck />
        </div>

        <div className={styles.filterSection}>
          <div className={styles.filterName}>Цена</div>
          <Range setPriceFrom={setPriceFrom} setPriceTo={setPriceTo} from={priceFrom} to={priceTo} />
        </div>

        <div className={styles.filterSection}>
          <div className={styles.filterName}>Упаковка</div>
          {packs.map(el => {
            const checkedPack = searchParams.get('pack')?.split(',').some(i => Number(i) === el.id)
            return <CheckField key={el.id} handler={choosePackFunc} title={el.name} type="checkbox" value={String(el.id)} name="pack" checked={checkedPack} handCheck={false} />
          })}
        </div>

        <button className="btn btn-block btn-success mb-2" onClick={applyFilter}>
          Применить
          {load && <span className="spinner-border spinner-border-sm ms-2"></span>}
        </button>

        <button className="btn btn-block btn-outline-secondary" onClick={resetFilter} disabled={isReset}>
          Сбросить
          {loadReset && <span className="spinner-border spinner-border-sm ms-2"></span>}
        </button>
      </div>
    </>
  )
}

export default Filter