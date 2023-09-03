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
  const load = useSelector((state: RootState) => state.app.loadSort)
  const load2 = useSelector((state: RootState) => state.app.loadFilter)
  const loadReset = useSelector((state: RootState) => state.app.loadFilterReset)
  const load3 = useSelector((state: RootState) => state.app.loadPager)
  const dispatch = useDispatch<AppDispatch>()
  
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
    <div className="goods-row">
      <div className="row">
        {listProducts.map(el => <Card key={el.id} el={el} />)}
      </div>
      {listProducts.length === 0 && <p>В данной категории нет товаров</p>}
    </div>
  )
}

export default GoodList