'use client'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setView } from '@/app/store/appSlice'
import { AppDispatch, RootState } from '@/app/store/store'
import styles from './View.module.scss'

type ViewType = 'grid' | 'list' | string

const View: React.FC = () => {
  const active = useSelector((state: RootState) => state.app.view)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const viewStotage = localStorage.getItem('view')
    if (viewStotage) dispatch(setView(viewStotage))
  }, [])

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