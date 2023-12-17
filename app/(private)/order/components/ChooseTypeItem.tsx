import React from "react"
import { styled } from "styled-components"
import { FaceType } from "./OrderForm"

interface IChooseTypeItem {
  current: FaceType
  handler: React.Dispatch<React.SetStateAction<FaceType>>
  title: string
  value: FaceType
}

// Styles
const Item = styled.button.attrs({ type: "button" })<{ $active: boolean }>`
  background: var(--color-${({ $active }) => $active ? 'success-light' : 'extralight'});
  border: 1px solid var(--color-${({ $active }) => $active ? 'success' : 'light'});
  border-radius: var(--radius);
  cursor: pointer;
  display: block;
  font-size: 18px;
  font-family: var(--font2);
  font-weight: 600;
  padding: var(--pb);
  text-align: center;
`

const ChooseTypeItem: React.FC<IChooseTypeItem> = ({ current, handler, title, value }) => {
  return (
    <Item onClick={() => handler(value)} $active={current === value}>
      {title}
    </Item>
  )
}

export default ChooseTypeItem
