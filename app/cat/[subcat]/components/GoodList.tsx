'use client'

import { useEffect, useState } from "react"
import Card from "@/components/Card/Card"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/store/store"
import { setLoadSort, setLoadFilter, setLoadPager } from "@/store/appSlice"
import { getProducts } from "@/options/api"
import { ProductType } from "@/options/types"
import Alert from "@/ui/Alert"

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
      dispatch(setLoadSort(false))
      dispatch(setLoadPager(false))
    }
    getData()
  }, [uri])
  
  return (
    <div>
      <div className={`grid grid-${view === 'list' ? '1' : '4'} grid-tb-${view === 'list' ? '1' : '3'} grid-mb-1 goodlist`}>
        {listProducts.map(el => <Card key={el.id} el={el} />)}
      </div>
      {listProducts.length === 0 && <Alert>В данной категории нет товаров</Alert>}
    </div>
  )
}

export default GoodList