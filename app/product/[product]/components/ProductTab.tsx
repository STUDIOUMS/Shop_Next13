"use client"

import { useState } from "react"

interface IProductTab {
  active: string
  setKey: any
  name: string
  val: string
}

const ProductTab: React.FC<IProductTab> = ({ active, name, setKey, val }) => {

  return (
    <li>
      <button className={`btn btn-sm ${active === val ? "btn-success" : "btn-outline-success"}`} onClick={() => setKey(val)}>{name}</button>
    </li>
  )
}

export default ProductTab