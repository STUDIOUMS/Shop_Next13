import { styled } from "styled-components"

interface IFormLine {
  children: React.ReactNode
  label?: string
}

// Styles
const Line = styled.div`
  margin: 0 0 var(--gap);
`
const Label = styled.label`
  display: block;
  font-weight: 500;
  margin: 0 0 6px;
`

const FormLine: React.FC<IFormLine> = ({ children, label }) => {
  return (
    <Line>
      {label && <Label area-aria-label={label}>{label}</Label>}
      {children}
    </Line>
  )
}

export default FormLine
