import { css, styled } from "styled-components"
import close from "@/assets/close.svg"
import { useEffect } from "react"

interface IModal {
  children: React.ReactNode
  show: boolean
  handler: React.Dispatch<React.SetStateAction<boolean>>
  title: string
}

// Styles
const positionStyles = `bottom: 0; left: 0; right: 0; top: 0;`
const animateStyles = css<{ $show: boolean }>`
  opacity: ${({ $show }) => $show ? '1' : '0'};
  transition: all 200ms ease-in-out;
  visibility: ${({ $show }) => $show ? 'visible' : 'hidden'};
`
const ModalWin = styled.div`
  background: var(--color-white);
  border-radius: var(--radius);
  max-width: 420px;
  padding: var(--gap);
  position: relative;
  width: 100%;
  z-index: 10;
`
const ModalOverlay = styled.div`
  ${positionStyles}
  background: rgba(0,0,0,0.65);
  backdrop-filter: blur(10px);
  position: absolute;
`
const ModalWrapper = styled.div<{ $show: boolean }>`
  ${positionStyles}
  ${animateStyles}
  align-items: center;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 2000;
  ${ModalWin}, ${ModalOverlay} {
    ${animateStyles}
  }
`
const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  margin: 0 0 var(--gap);
`
const ModalClose = styled.button`
  background: url(${close.src}) center / 16px no-repeat;
  border: 0;
  cursor: pointer;
  height: 24px;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 24px;
`

const Modal: React.FC<IModal> = ({ children, handler, show, title }) => {
  useEffect(() => {
    if (show) document.body.classList.add('overflow')
    else document.body.classList.remove('overflow')
  }, [show])
  
  return (
    <ModalWrapper $show={show}>
      <ModalWin>
        <ModalTitle>{title}</ModalTitle>
        {children}
        <ModalClose onClick={() => handler(false)} />
      </ModalWin>
      <ModalOverlay onClick={() => handler(false)} />
    </ModalWrapper>
  )
}

export default Modal
