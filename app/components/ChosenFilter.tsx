'use client'

import { url_packages } from "@/options/fetches"
import { set_currency } from "@/options/settings"
import { PackType, ResponseType } from "@/options/types"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const ChosenFilter: React.FC = () => {
  const [packs, setPacks] = useState<string>('')
  const searchParams = useSearchParams()
  const packParams = searchParams.get('pack')?.split(',')
  

  useEffect(() => {
    fetch(`${url_packages}`)
      .then(response => response.json())
      .then((data: ResponseType) => {
        let arr = data.results.filter((el: PackType) => packParams?.includes(el.id.toString()))
        let output: string = arr.map((el: PackType) => el.name).join(', ')
        setPacks(output)
      })
  }, [packParams])


  // arrParams
  const arrParams = searchParams.toString().split('&').map(el => {
    if (el.includes('hit')) el = 'Хит'
    if (el.includes('discount')) el = 'Скидка'
    if (el.includes('new')) el = 'Новинка'
    if (el.includes('price_min')) {
      let i = el.split('=')
      el = `От ${i[1]} ${set_currency}`
    }
    if (el.includes('price_max')) {
      let i = el.split('=')
      el = `До ${i[1]} ${set_currency}`
    }
    if (el.includes('pack')) return ''
    return el
  }).filter(el => el !== '').join(', ')

  const output: any = []
  if (arrParams.length) {
    output.push(arrParams)
  }
  if (packs.length) {
    output.push(`Упаковка: ${packs}`)
  }
  
  return (
    <div className="mb-3">
      {output.length ? <>Выбранные параметры:<br /></> : ''}
      <b>{output.join(', ')}</b>
    </div>
  )
}

export default ChosenFilter