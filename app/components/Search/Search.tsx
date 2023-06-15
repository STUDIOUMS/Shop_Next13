'use client'

import { url_products } from "@/options/fetches"
import { debounce } from "@/options/helpers"
import { ProductType } from "@/options/types"
import { useRef, useState } from "react"
import styles from "./Search.module.scss"
import SearchItem from "./SearchItem"

const Search: React.FC = () => {
  const [results, setResults] = useState<ProductType[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  // debounceVal
  const debounceVal = debounce((text: string) => {
    fetch(`${url_products}?search=${text}`)
      .then(response => response.json())
      .then(data => setResults(data.results))
  }, 500)

  // searchHandler
  const searchHandler = (val: string) => {
    if (val.length) {
      debounceVal(val)
    } else {
      closeDropdown()
    }
  }

  // closeDropdown
  const closeDropdown = () => {
    setResults([])
    inputRef.current!.value = ''
  }
  
  
  return (
    <div className={styles.searchbox}>
      <input type="search" className="form-control" placeholder="Поиск..." onChange={e => searchHandler(e.target.value)} ref={inputRef} />
      
      {results.length > 0 &&
      <ul className={styles.searchboxDropdown}>
        {results.map(el => <SearchItem key={el.id} el={el} close={closeDropdown} />)}
      </ul>}
    </div>
  )
}

export default Search