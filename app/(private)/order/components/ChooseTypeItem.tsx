import CheckField, { LabelBox, Radio } from "@/components/CheckField"
import React from "react"
import { styled } from "styled-components"
import { FaceType } from "@/options/types"

interface IChooseTypeItem {
  current: FaceType
  handler: React.Dispatch<React.SetStateAction<FaceType>>
  title: string
  value: FaceType
}

// Styles
const Item = styled.div<{ $active: boolean }>`
  background: var(--color-${({ $active }) => $active ? 'extralight' : 'white'});
  border: 1px solid var(--color-${({ $active }) => $active ? 'success' : 'light'});
  border-radius: var(--radius);
  cursor: pointer;
  display: block;
  font-size: 16px;
  font-family: var(--font2);
  ${LabelBox} {
    display: block; padding: var(--pb); padding-left: 44px;
    ${Radio} { top: 50%; margin-top: -10px; left: var(--pb); }
  }
`

const ChooseTypeItem: React.FC<IChooseTypeItem> = ({ current, handler, title, value }) => {
  return (
    <Item $active={current === value}>
      <CheckField
        handler={() => handler(value)}
        title={title}
        type="radio"
        name="facetype"
        value={value}
        checked={current === value}
      />
    </Item>
  )
}

export default ChooseTypeItem
