import { styled } from "styled-components"
import Fancybox from "../Fancybox"
import Btn, { BtnColorType, BtnSizeType } from "../UI/Btn"
import close from "@/assets/close.svg"

interface IModal {
  children: React.ReactNode
  id: string
  btnName: string
  btnSize?: BtnSizeType
  btnColor?: BtnColorType
  title?: string
}

// Styles
const ModalWin = styled.div`
  background: var(--color-white);
  border-radius: var(--radius);
  display: none;
  max-width: 420px;
  padding: var(--gap);
  position: relative;
  width: 100%;
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

const Modal: React.FC<IModal> = ({ btnName, btnColor, btnSize, children, id, title = btnName }) => {
  return (
    <Fancybox options={{
      closeButton: false,
      dragToClose: false,
      autoFocus: false
    }}>
      <Btn title={btnName} color={btnColor} size={btnSize} fancy={`#${id}`} />
      <ModalWin id={id}>
        <ModalTitle>{title}</ModalTitle>
        {children}
        <ModalClose data-fancybox-close />
      </ModalWin>
    </Fancybox>
  )
}

export default Modal
