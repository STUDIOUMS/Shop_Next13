import { useEffect, useRef } from 'react'
import { styled } from 'styled-components'
import check from "@/assets/check.svg"
import radio from "@/assets/radio.svg"

interface ICheckField {
  name?: string
  title: string
  type: 'checkbox' | 'radio'
  value: string
  handler: (check: boolean, val: string) => void
  reset?: boolean
  checked?: boolean
}

// Styles
export const Radio = styled.input`
  border: 1px solid var(--color-light);
  border-radius: 50%;
  cursor: pointer;
  width: 18px;
  height: 18px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  &[type="checkbox"] {
    background: var(--color-white) url(${check.src}) center center / 14px no-repeat;
    border-radius: 3px;
  }
  &[type="radio"] {
    background: var(--color-white) url(${radio.src}) center center / 8px no-repeat;
  }
  &:checked {
    background-color: var(--color-success);
    border-color: var(--color-success);
  }
`
export const LabelBox = styled.label`
  display: inline-block;
  cursor: pointer;
  position: relative;
  padding-left: 26px;
  font-size: 16px;
  line-height: 20px;
  ${Radio} { position: absolute; left: 0; top: 0; margin: 0; padding: 0; }
`
export const LabelLine = styled.div`
  margin: 0 0 10px;
  &:last-child { margin: 0; }
`


const CheckField: React.FC<ICheckField> = ({ handler, name, title, reset, type = 'checkbox', value, checked }) => {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (reset) {
      ref.current!.checked = false
    }
  }, [reset])

  // checkFunc
  const checkFunc = (e: any) => {
    handler(e.target.checked, e.target.value)
  }
  
  return (
    <LabelLine>
      <LabelBox>
        <Radio
          type={type}
          name={name}
          value={value}
          onChange={checkFunc}
          defaultChecked={checked}
          ref={ref}
        />
        {title}
      </LabelBox>
    </LabelLine>
  )
}

export default CheckField