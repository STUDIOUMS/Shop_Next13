'use client'

import View from "@/app/components/View/View"
import { setLoadSort } from "@/app/store/appSlice"
import { useAppDispatch, useAppSelector } from "@/app/store/hooks"
import { SortItemType } from "@/options/types"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useCallback, useEffect, useRef } from "react"
import { styled } from "styled-components"
import { InputStyles } from "../UI/FormInput"
import select from "@/assets/select.svg"
import Spinner from "../UI/Spinner"

// Styles
const SortBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 var(--gap);
`
const SortBoxLeft = styled.div`
  display: flex;
  align-items: center;
`
export const SelectBox = styled.select<{ $error?: boolean, $expand?: boolean }>`
  ${InputStyles}
  background: url(${select.src}) calc(100% - 10px) center / 18px no-repeat;
  cursor: pointer;
  margin-right: var(--pb);
  padding-right: 32px;
  -webkit-appearance: none;
`

interface ISort {
  list: SortItemType[]
}

const Sort: React.FC<ISort> = ({ list }) => {
  const load = useAppSelector(state => state.app.loadSort)
  const dispatch = useAppDispatch()
  const ref = useRef<HTMLSelectElement>(null)

  // url params
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  
  // Handle
  const sortQuery = searchParams.get('ordering') || ''
  const isOrder = searchParams.has('ordering')
  const valueQuery = isOrder ? sortQuery : 'default-value'

  useEffect(() => {
    if (!isOrder) {
      ref.current!.value = 'default-value'
    }
  }, [isOrder])


  // searchParams with a provided key/value pair
  const createQueryString = useCallback((name: string, val: string) => {
    const params = new URLSearchParams(searchParams)
    let defaultSort = val.includes('default-value')
    params.set(name, val)

    if (defaultSort) {
      params.delete('ordering')
    }

    return params.toString()
  }, [searchParams])


  // sortHandler
  const sortHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let uri = createQueryString('ordering', e.target.value)
    router.push(pathname + `?` + uri)
    dispatch(setLoadSort(true))
  }

  return (
    <SortBox>
      <SortBoxLeft>
        <SelectBox onChange={sortHandler} defaultValue={valueQuery} ref={ref}>
          <option value="default-value">Сортировать</option>
          {list.map(el => <option key={el.value} value={el.value}>{el.name}</option>)}
        </SelectBox>
        {load && <Spinner size="small" />}
      </SortBoxLeft>
      <View />
    </SortBox>
  )
}

export default Sort