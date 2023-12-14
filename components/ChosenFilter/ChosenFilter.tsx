'use client'

import { set_currency } from "@/options/settings"
import { PackType } from "@/options/types"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import styles from './ChosenFilter.module.scss'

interface IChosenFilter {
  packs: PackType[]
}

const ChosenFilter: React.FC<IChosenFilter> = ({ packs }) => {
  const [packString, setPackString] = useState<string>('')
  const searchParams = useSearchParams()
  const isHit = searchParams.has('hit')
  const isDiscount = searchParams.has('discount')
  const isNew = searchParams.has('new')
  const isPriceMin = searchParams.has('price_min')
  const priceMin = searchParams.get('price_min')
  const isPriceMax = searchParams.has('price_max')
  const priceMax = searchParams.get('price_max')
  const isPack = searchParams.has('pack')
  const packParams = searchParams.get('pack')?.split(',')
  
  useEffect(() => {
    let arr = packs.filter((el: PackType) => packParams?.includes(el.id.toString()))
    let output: string = arr.map((el: PackType) => el.name).join(', ')
    setPackString(output)
  }, [searchParams])

  const output: string[] = []
  if (isHit) output.push('Хит')
  if (isDiscount) output.push('Скидки')
  if (isNew) output.push('Новинки')
  if (isPriceMin) output.push(`От: ${priceMin} ${set_currency}`)
  if (isPriceMax) output.push(`До: ${priceMax} ${set_currency}`)
  if (isPack) output.push(`Упаковка: ${packString}`)

  if (!output.length) {
    return null
  }
  
  return (
    <div className={styles.chosenFilter}>
      <div className={styles.chosenFilterTitle}>Выбранные параметры:</div>
      {output.map((el, index) => (
        <div key={index} className={styles.chosenFilterItem}>{el}</div>
      ))}
    </div>
  )
}

export default ChosenFilter