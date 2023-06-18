'use client'

import { AppDispatch, RootState } from '@/app/store/store'
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

  // State
  const [hit, setHit] = useState<string>('')
  const [discount, setDiscount] = useState<string>('')
  const [newf, setNewf] = useState<string>('')
  const [priceFrom, setPriceFrom] = useState<string>('')
  const [priceTo, setPriceTo] = useState<string>('')
  const [chosenPacks, setChosenPacks] = useState<string[]>([])

  // url params
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

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
  }


  // chooseFilterParam
  const chooseFilterParam = (check: any, val: string) => {
    if (val === 'hit') {
      (check) ? setHit(val) : setHit('')
    }
    if (val === 'discount') {
      (check) ? setDiscount(val) : setDiscount('')
    }
    if (val === 'new') {
      (check) ? setNewf(val) : setNewf('')
    }
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
          <CheckField handler={chooseFilterParam} title="Хит" type="checkbox" value="hit" name="hit" checked={false} handCheck />
          <CheckField handler={chooseFilterParam} title="Скидка" type="checkbox" value="discount" name="discount" checked={false} handCheck />
          <CheckField handler={chooseFilterParam} title="Новинки" type="checkbox" value="new" name="new" checked={false} handCheck />
        </div>

        <div className={styles.filterSection}>
          <div className={styles.filterName}>Цена</div>
          <Range setPriceFrom={setPriceFrom} setPriceTo={setPriceTo} from="0" to="0" />
        </div>

        <div className={styles.filterSection}>
          <div className={styles.filterName}>Упаковка</div>
          {packs.map(el => {
            return <CheckField key={el.id} handler={choosePackFunc} title={el.name} type="checkbox" value={String(el.id)} name="pack" checked={false} handCheck={false} />
          })}
        </div>

        <button className="btn btn-block btn-success mb-2" onClick={applyFilter}>
          Применить
          {load && <span className="spinner-border spinner-border-sm ms-2"></span>}
        </button>
        <button className="btn btn-block btn-outline-secondary" onClick={() => {}}>
          Сбросить
        </button>
      </div>
    </>
  )
}

export default Filter