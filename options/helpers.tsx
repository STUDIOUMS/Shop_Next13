import { attrType, featPackType, NavItemType, SortItemType } from "./types"

// Debounce
export function debounce(cb: any, delay: number) {
  let timeout: any
  return function(...args: any) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}

// create Attributes
export function createAttributes(keys: featPackType[], feats: attrType[]): featPackType[] {
  const output = keys.map(el => {
    const val = feats.find(attr => attr.featuresID === el.id)?.value
    el['value'] = val
    return el
  })
  return output
}

// createDate
export function createDate(dateString: string, time?: boolean) {
  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октбярь', 'Ноябрь', 'Декабрь']

  const date = new Date(dateString)
  const day = date.getDay()
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  const hours = date.getHours()
  const mins = date.getMinutes() < 10 ? '0' + date.getMinutes(): date.getMinutes()
  const timeString = `, ${hours}:${mins}`
  return `${day} ${month} ${year}${time ? timeString : ''}`
}

// SortItems
export const SortItems: SortItemType[] = [
  { name: 'От дешевых', value: 'price-asc' },
  { name: 'От дорогих', value: 'price-desc' },
  { name: 'По алфавиту [А-Я]', value: 'title-asc' },
  { name: 'По алфавиту [Я-А]', value: 'title-desc' }
]

// navItems
export const navItems: NavItemType[] = [
  { id: 1, title: "Главная", path: "/" },
  { id: 2, title: "Блог", path: "/blog" },
  { id: 3, title: "О компании", path: "/about" },
  { id: 4, title: "Доставка и оплата", path: "/delivery" },
  { id: 5, title: "Контакты", path: "/contacts" },
]
