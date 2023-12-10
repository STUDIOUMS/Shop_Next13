'use client'

import { useEffect } from 'react'
import { setView } from '@/app/store/appSlice'
import styles from './View.module.scss'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'

type ViewType = 'grid' | 'list' | string

const View: React.FC = () => {
  const active = useAppSelector(state => state.app.view)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const viewStotage = localStorage.getItem('view')
    if (viewStotage) dispatch(setView(viewStotage))
  }, [dispatch])

  // Active classes
  const gridActive = (active === 'grid') ? styles.viewboxBtnActive : ''
  const listActive = (active === 'list') ? styles.viewboxBtnActive : ''

  // Classes
  const btnGridClass = `${styles.viewboxBtn} ${styles.viewboxGrid} ${gridActive}`
  const btnListClass = `${styles.viewboxBtn} ${styles.viewboxList} ${listActive}`

  return (
    <ul className={styles.viewbox}>
      <li><button className={btnGridClass} onClick={() => dispatch(setView('grid'))}></button></li>
      <li><button className={btnListClass} onClick={() => dispatch(setView('list'))}></button></li>
    </ul>
  )
}

export default View