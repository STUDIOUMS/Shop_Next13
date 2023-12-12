import { styled } from "styled-components"

type SpinnerSizeColor = 'text' | 'white' | 'danger' | 'success' 
type SpinnerSizeType = 'default' | 'small' | 'large' 
interface ISpinner {
  color?: SpinnerSizeColor
  size?: SpinnerSizeType
}

// Styles
const Spin = styled.div<{ $color: SpinnerSizeColor, $size: SpinnerSizeType }>`
  border-color: var(--color-${props => props.$color});
  border-style: solid;
  border-width: ${props => props.$size === 'small' ? '2' : '4'}px;
  border-bottom-color: transparent;
  display: inline-block;
  border-radius: 50%;
  width: ${props => props.$size === 'large' ? '48px' : props.$size === 'small' ? '20px' : '30px'};
  height: ${props => props.$size === 'large' ? '48px' : props.$size === 'small' ? '20px' : '30px'};
  animation: rotation 1s linear infinite;
  @keyframes rotation {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const Spinner: React.FC<ISpinner> = ({ color = 'text', size = 'default' }) => {
  return (
    <Spin $color={color} $size={size}></Spin>
  )
}

export default Spinner
