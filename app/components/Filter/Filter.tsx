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
  const [hit, setHit] = useState<boolean>(false)
  const [discount, seDiscount] = useState<boolean>(false)
  const [newf, setNewf] = useState<boolean>(false)

  // url params
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // setFilter
  const setFilter = useCallback((arr: any[]) => {
    const params = new URLSearchParams(searchParams)

    // removing sort and limit parameters
    params.delete('ordering')
    params.delete('limit')

    // setting parameters
    if (hit) params.set('hit', 'true')
    if (discount) params.set('discount', 'true')
    if (newf) params.set('new', 'true')



    return params.toString()
  }, [searchParams])

  // applyFilter
  const applyFilter = () => {
    const uri: string = setFilter([hit, discount, newf])
    router.push(pathname + '?' + uri)
  }  
  
  return (
    <>
      <button className={styles.filterBtn}></button>
      
      <div className={styles.filter}>
        <div className={styles.filterTitle}>Фильтр</div>

        {/* <h3>Hit {hit}</h3>
        <h3>Sale {discount}</h3>
        <h3>New {newf}</h3> */}
        
        <div className={styles.filterSection}>
          <CheckField handler={setHit} title="Хит" type="checkbox" value="hit" name="hit" checked={false} handCheck={false} />
          <CheckField handler={seDiscount} title="Скидка" type="checkbox" value="discount" name="discount" checked={false} handCheck={false} />
          <CheckField handler={setNewf} title="Новинки" type="checkbox" value="new" name="new" checked={false} handCheck={false} />
        </div>

        <div className={styles.filterSection}>
          <div className={styles.filterName}>Цена</div>
          <Range setPriceFrom={() => {}} setPriceTo={() => {}} from="0" to="0" />
        </div>

        <div className={styles.filterSection}>
          <div className={styles.filterName}>Упаковка</div>
          {packs.map(el => {
            return <CheckField key={el.id} handler={() => {}} title={el.name} type="checkbox" value={String(el.id)} name="pack" checked={false} handCheck={false} />
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