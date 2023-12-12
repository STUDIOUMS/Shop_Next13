'use client'

import { AppDispatch, RootState } from '@/app/store/store'
import { setLoadFilter } from '@/app/store/appSlice'
import { PackType } from '@/options/types'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckField from '../CheckField/CheckField'
import Range from '../Range/Range'
import { set_currency } from '@/options/settings'
import Btn from '../UI/Btn'
import { FilterBody, FilterBox, FilterClose, FilterFooter, FilterShow, FilterTitle } from './FilterStyles'
import FilterItem from './FilterItem'
import Spinner from '../UI/Spinner'

interface IFilter {
  packs: PackType[]
}

const Filter: React.FC<IFilter> = ({ packs }) => {
  const dispatch = useDispatch<AppDispatch>()
  const load = useSelector((state: RootState) => state.app.loadFilter)

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
  const [reset, setReset] = useState<boolean>(false)
  const [mobileShow, setMobileShow] = useState<boolean>(false)

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
    setReset(false)
    dispatch(setLoadFilter(true))
    mbCloseFilter()
  }


  // resetFilter
  const resetFilter = () => {
    const uri: string = searchParams.toString()

    setHit(false)
    setDiscount(false)
    setNewf(false)
    setPriceFrom('')
    setPriceTo('')
    setChosenPacks([])
    setReset(true)
    mbCloseFilter()
    
    if (uri.length) {
      router.push(pathname)
      dispatch(setLoadFilter(true))
    }
  }


  // chooseFilterParam
  const chooseFilterParam = (check: any, val: string) => {
    setReset(false)
    if (val === 'hit') setHit(!hit)
    if (val === 'discount') setDiscount(!discount)
    if (val === 'new') setNewf(!newf)
  }
  

  // choosePackFunc
  const choosePackFunc = (check: boolean, id: string) => {
    const packExist = chosenPacks.some(el => el === id)
    setReset(false)
    if (!packExist) {
      setChosenPacks(prev => [...prev, id].sort())
    } else {
      setChosenPacks(prev => prev.filter(el => el !== id))
    }
  }


  // Mobile show filter
  const mbShowFilter = () => {
    setMobileShow(true)
    document.body.style.height = '100%'
    document.body.style.overflow = 'hidden'
  }
  // Mobile close filter
  const mbCloseFilter = () => {
    setMobileShow(false)
    document.body.removeAttribute('style')
  }

  return (
    <>
      <FilterShow onClick={mbShowFilter}>
        {!isReset && <span></span>}
      </FilterShow>
      
      <FilterBox $show={mobileShow}>

        <FilterTitle>
          Фильтр
          <FilterClose onClick={mbCloseFilter} />
        </FilterTitle>

        <FilterBody>

          <FilterItem>
            <CheckField handler={chooseFilterParam} title="Хит" type="checkbox" value="hit" name="hit" checked={hit} reset={reset} />
            <CheckField handler={chooseFilterParam} title="Скидка" type="checkbox" value="discount" name="discount" checked={discount} reset={reset} />
            <CheckField handler={chooseFilterParam} title="Новинки" type="checkbox" value="new" name="new" checked={newf} reset={reset} />
          </FilterItem>

          <FilterItem title={`Цена (${set_currency})`}>
            <Range handlerFrom={setPriceFrom} handlerTo={setPriceTo} from={priceFrom} to={priceTo} />
          </FilterItem>

          <FilterItem title="Упаковка">
            {packs.map(el => {
              const checkedPack = searchParams.get('pack')?.split(',').some(i => Number(i) === el.id)
              return <CheckField key={el.id} handler={choosePackFunc} title={el.name} type="checkbox" value={String(el.id)} name="pack" checked={checkedPack} reset={reset} />
            })}
          </FilterItem>

        </FilterBody>

        <FilterFooter className="grid grid-2">
          <Btn title="Применить" handler={applyFilter} color='success' expand />
          <Btn title='Сбросить' handler={resetFilter} expand disabled={isReset} />
        </FilterFooter>

        {load && <Spinner />}
      </FilterBox>
    </>
  )
}

export default Filter