'use client'

import { useEffect, useState } from "react"
import Card from "./Card/Card"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/app/store/store"
import { setLoadSort, setLoadFilter, setLoadPager, setLoadFilterReset } from "@/app/store/appSlice"
import { getProducts } from "@/options/fetches"
import { ProductType } from "@/options/types"

interface IGoodList {
  list: ProductType[]
  catID: number
  limit: number
  uri: string
}

const GoodList: React.FC<IGoodList> = ({ catID, limit, list, uri }) => {
  const [listProducts, setListProducts] = useState<ProductType[]>(list)
  const dispatch = useDispatch<AppDispatch>()
  const view = useSelector((state: RootState) => state.app.view)
  
  useEffect(() => {
    const getData = async () => {
      const { products } = await getProducts(catID, uri, limit)
      setListProducts(products)
      dispatch(setLoadFilter(false))
      dispatch(setLoadFilterReset(false))
      dispatch(setLoadSort(false))
      dispatch(setLoadPager(false))
    }
    getData()
  }, [uri])
  
  return (
    <div>
      <div className={`grid grid-${view === 'list' ? '1' : '4'} goodlist`}>
        {listProducts.map(el => <Card key={el.id} el={el} />)}
      </div>
      {listProducts.length === 0 && <p>В данной категории нет товаров</p>}
    </div>
  )
}

export default GoodList