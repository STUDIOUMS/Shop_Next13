'use client'

import { useState } from "react"
import FormInput, { Input } from "../UI/FormInput"
import { styled } from "styled-components"
import { useRouter, useSearchParams, redirect } from "next/navigation"
import Btn from "../UI/Btn"

// Styles
const SearchBox = styled.div`
  flex: 1;
  margin: 0 var(--gap);
  position: relative;
  ${Input} { padding-right: 74px; }
`
const SearchBoxBtn = styled.div`
  position: absolute;
  right: 6px;
  top: 6px;
`

const Search: React.FC = () => {
  const [val, setVal] = useState<string>('')
  const searchParams = useSearchParams()
  const router = useRouter()
  const params = new URLSearchParams(searchParams)

  // searchHandler
  const searchHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (val.length > 0) {
      params.set('s', val)
      router.push('/search?' + params.toString())
    }
  }

  
  return (
    <SearchBox>
      <form onSubmit={searchHandler}>
        <FormInput type="search" placeholder="Поиск..." expand handler={setVal} val={val} />
        <SearchBoxBtn>
          <Btn size="small" title="Поиск" type="submit" />
        </SearchBoxBtn>
      </form>
    </SearchBox>
  )
}

export default Search