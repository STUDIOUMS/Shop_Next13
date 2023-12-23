'use client'

import { styled } from "styled-components"

type AlertColorType = "danger" | "success" | "light"
type AlertAlignType = "left" | "center" | "right"

interface IAlert {
  align?: AlertAlignType
  children: React.ReactNode
  color?: AlertColorType
}

// Styles
const AlertBox = styled.div<{ $align: AlertAlignType, $color: AlertColorType }>`
  background: ${props => 
    props.$color === 'danger' ? 'var(--color-danger-light)' :
    props.$color === 'success' ? 'var(--color-success-light)' :
    'var(--color-extralight)'
  };
  border: 1px solid var(--color-${props => props.$color});
  border-radius: var(--radius);
  margin: 0 0 var(--gap);
  padding: var(--pb) var(--gap);
  text-align: ${props => props.$align};
  &:last-child { margin: 0; }
  h3 { margin: 0 0 8px; }
`

const Alert: React.FC<IAlert> = ({ align = 'left', children, color = "light" }) => {
  return (
    <AlertBox $align={align} $color={color}>
      {children}
    </AlertBox>
  )
}

export default Alert
