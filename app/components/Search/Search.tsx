'use client'

import { useState } from "react"
import FormInput from "../UI/FormInput"
import { styled } from "styled-components"
import { useRouter, useSearchParams, redirect } from "next/navigation"

// Styles
const SearchBox = styled.div`
  flex: 1;
  margin: 0 var(--gap);
  position: relative;
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
        <FormInput type="search" placeholder="Поиск по сайту..." expand handler={setVal} val={val} />
      </form>
    </SearchBox>
  )
}

export default Search