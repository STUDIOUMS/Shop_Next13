import { NavItemType, SortItemType } from "./types"

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
  { name: 'От дешевых', value: 'related_packs__price' },
  { name: 'От дорогих', value: '-related_packs__price' },
  { name: 'По алфавиту [А-Я]', value: 'title' },
  { name: 'По алфавиту [Я-А]', value: '-title' }
]

// navItems
export const navItems: NavItemType[] = [
  { id: 1, title: "Главная", path: "/" },
  { id: 2, title: "Блог", path: "/blog" },
  { id: 3, title: "О компании", path: "/about" },
  { id: 4, title: "Доставка и оплата", path: "/delivery" },
  { id: 5, title: "Контакты", path: "/contacts" },
]
