import { NavItemType, SortItemType } from "./types"

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

// createArray
export const createArray = (num: number): any[] => {
  const output: any[] = []
  for (let i = 0; i < num; i++) {
    output.push(i)
  }
  return output
}

// SortItems
export const SortItems: SortItemType[] = [
  { name: 'От дешевых', value: 'price' },
  { name: 'От дорогих', value: '-price' },
  { name: 'По алфавиту [А-Я]', value: 'title' },
  { name: 'По алфавиту [Я-А]', value: '-title' }
]

// navItems
export const navItems: NavItemType[] = [
  { id: 1, title: "Главная", path: "/" },
  { id: 2, title: "Блог", path: "/blog" },
  { id: 3, title: "О компании", path: "/about" },
  { id: 4, title: "Доставка и оплата", path: "/delivery" },
  {
    id: 5,
    title: "Для партнеров",
    path: "/partners",
    children: [
      { id: 9, title: "Документы", path: "/" },
      { id: 10, title: "Условия", path: "/" },
      { id: 11, title: "Сертификаты", path: "/" }
    ]
  },
  { id: 6, title: "Вакансии", path: "/vacancies" },
  { id: 7, title: "Прайс", path: "/price" },
  { id: 8, title: "Контакты", path: "/contacts" }
]
