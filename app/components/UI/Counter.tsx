import { changeCountOrder } from "@/app/store/appSlice"
import { useAppDispatch } from "@/app/store/hooks"
import { css, styled } from "styled-components"
import plus from "@/assets/plus.svg"
import minus from "@/assets/minus.svg"
import React, { useEffect, useState } from "react"

interface ICounter {
  productId: string
  val: number
}

// Styles
const size: number = 38

const CounterBox = styled.div`
  display: inline-block;
  position: relative;
  padding: 0 30px;
`
const CounterInput = styled.input.attrs({ type: "text" })`
  background: 0;
  border: 1px solid var(--color-light);
  border-radius: var(--radius);
  font-family: var(--font);
  font-size: 14px;
  height: ${size}px;
  line-height: ${size}px;
  outline: none;
  padding: 0;
  text-align: center;
  width: 44px;
`
const CounterButton = css`
  background: var(--color-light);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 14px;
  border: 0;
  border-radius: var(--radius);
  cursor: pointer;
  height: ${size}px;
  position: absolute;
  top: 0;
  transition: all 200ms ease-in-out;
  width: 28px;
  &:hover {
    background-color: var(--color-light-hover);
  }
`
const CounterMin = styled.button`
  ${CounterButton}
  background-image: url(${minus.src});
  left: 0;
`
const CounterPlus = styled.button`
  ${CounterButton}
  background-image: url(${plus.src});
  right: 0;
`

const Counter: React.FC<ICounter> = ({ productId, val }) => {
  const dispatch = useAppDispatch()
  const [counter, setCounter] = useState<number>(val)

  useEffect(() => {
    dispatch(changeCountOrder({ count: counter, id: productId }))
  }, [counter, dispatch])

  // minHandler
  const minHandler = () => {
    if (counter > 1) setCounter(prev => prev - 1)
  }
  
  // plusHandler
  const plusHandler = () => {
    setCounter(prev => prev + 1)
  }

  // changeHandler
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCounter(Number(e.target.value))
  }

  return (
    <CounterBox>
      <CounterMin onClick={minHandler} />
      <CounterInput
        value={counter}
        defaultValue={counter}
        onChange={changeHandler}
      />
      <CounterPlus onClick={plusHandler}  />
    </CounterBox>
  )
}

export default Counter
