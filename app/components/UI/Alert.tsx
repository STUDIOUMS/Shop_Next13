import SCRegistry from "@/options/registry"
import { styled } from "styled-components"

type AlertColorType = "danger" | "success" | "light"

interface IAlert {
  children: React.ReactNode
  color?: AlertColorType
}

// Styles
const AlertBox = styled.div<{ $color: AlertColorType }>`
  background: ${props => 
    props.$color === 'danger' ? 'var(--color-danger-light)' :
    props.$color === 'success' ? 'var(--color-success-light)' :
    'var(--color-extralight)'
  };
  border: 1px solid var(--color-${props => props.$color});
  border-radius: var(--radius);
  margin: 0 0 var(--gap);
  padding: var(--pb) var(--gap);
  &:last-child { margin: 0; }
`

const Alert: React.FC<IAlert> = ({ children, color = "light" }) => {
  return (
    <SCRegistry>
      <AlertBox $color={color}>
        {children}
      </AlertBox>
    </SCRegistry>
  )
}

export default Alert
