'use client'

import { useState } from "react"
import FormInput, { Input } from "../../ui/FormInput"
import { styled } from "styled-components"
import { useRouter, useSearchParams } from "next/navigation"
import search from "@/assets/search.svg"

// Styles
const SearchBox = styled.div`
  flex: 1;
  margin: 0 var(--gap);
  position: relative;
  ${Input} { padding-right: 54px; }
`
const SearchBoxBtn = styled.button`
  background: var(--color-light) url(${search.src}) center / 16px no-repeat;
  border: 0;
  border-radius: 0 calc(var(--radius) - 2px) calc(var(--radius) - 2px) 0;
  cursor: pointer;
  display: block;
  padding: 0;
  position: absolute;
  right: 1px;
  top: 1px;
  transition: all 200ms ease-in-out;
  height: 40px;
  width: 40px;
  &:hover { background-color: var(--color-light-hover); }
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
      setVal('')
    }
  }

  
  return (
    <SearchBox>
      <form onSubmit={searchHandler}>
        <FormInput type="search" placeholder="Поиск..." expand handler={setVal} val={val} />
        <SearchBoxBtn type="submit" />
      </form>
    </SearchBox>
  )
}

export default Search