'use client'

import { setToast } from "@/app/store/appSlice"
import { useAppDispatch, useAppSelector } from "@/app/store/hooks"
import { useEffect } from "react"
import { styled } from "styled-components"

// Styles
const ToastPopup = styled.div<{ $show: boolean }>`
  background: var(--color-white);
  border-radius: var(--radius);
  box-shadow: 0 2px 16px rgba(0,0,0,0.7);
  bottom: 80px;
  max-width: 320px;
  padding: var(--pb) var(--gap);
  position: fixed;
  right: var(--gap);
  z-index: 900;
  visibility: hidden;
  opacity: 0;
  transform:
  translateY(20px);

  @keyframes showToast {
    0% { visibility: hidden; opacity: 0; transform: translateY(20px); }
    70% { visibility: visible; opacity: 1; transform: translateY(-10px); }
    100% { visibility: visible; opacity: 1; transform: translateY(0px); }
  }
  ${props => props.$show && `
    animation: showToast 300ms 1 forwards;
  `}

  @media screen and (max-width: 720px) {
    bottom: 30px;
  }
`

const Toast: React.FC = () => {
  const toast = useAppSelector(state => state.app.toast)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!!toast) {
      setTimeout(() => {
        dispatch(setToast(''))
      }, 3000)
    }
  }, [dispatch, toast])

  return (
    <ToastPopup $show={!!toast}>
      {toast}
    </ToastPopup>
  )
}

export default Toast
