'use client'

import Link from "next/link"
import styled, { css } from "styled-components"

export type BtnSizeType = 'small' | 'medium' | 'large'
export type BtnColorType = 'success' | 'danger' | 'white'

interface IBtn {
  color?: BtnColorType
  expand?: boolean
  handler?: () => void
  load?: boolean
  size?: BtnSizeType
  title: string
  to?: string
  type?: "button" | "reset" | "submit"
  disabled?: boolean
}

// Styles
const btnStyles = css<{ $size: BtnSizeType, $color: BtnColorType, $expand: boolean }>`
  background: var(--color-${({ $color }) => $color});
  border: 1px solid ${({ $color }) => $color === 'white' ? 'var(--color-light)' : 'transparent'};
  border-radius: var(--radius);
  color: ${({ $color }) => $color === 'white' ? 'var(--color-text)' : 'var(--color-white)'};
  cursor: pointer;
  display: inline-block;
  font-family: var(--font);
  font-size: ${props => (props.$size === 'large') ? '18px' : (props.$size === 'small') ? '12px' : '14px'};
  line-height: ${props => (props.$size === 'large') ? '22px' : (props.$size === 'small') ? '16px' : '18px'};
  padding: ${props => (props.$size === 'large') ? '14px 30px' : (props.$size === 'small') ? '6px 16px' : '11px 24px'};
  outline: none;
  text-align: center;
  text-decoration: none;
  transition: all 200ms ease-in-out;
  width: ${({ $expand }) => $expand ? '100%;' : 'auto'};
  &:hover {
    color: ${({ $color }) => $color === 'white' ? 'var(--color-text)' : 'var(--color-white)'};
    background: var(--color-${({ $color }) => $color}-hover);
    text-decoration: none;
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`
const Button = styled.button<{ $size: BtnSizeType, $color: BtnColorType, $expand: boolean }>`
  ${btnStyles}
`
const LinkButton = styled(Link)<{ $size: BtnSizeType, $color: BtnColorType, $expand: boolean }>`
  ${btnStyles}
`

const Btn: React.FC<IBtn> = ({ expand = false, disabled, handler, title, to, size = 'medium', color = 'white', load = false, type = "button" }) => {
  return <>
    {
      (!!to) ? <LinkButton href={to!} $size={size} $color={color} $expand={expand}>{title}</LinkButton> :
        
        <Button
          $size={size}
          $color={color}
          $expand={expand}
          onClick={handler}
          type={type}
          disabled={disabled}
        >
          {title}
          {load && <span className="spinner-border spinner-border-sm ms-2"></span>}
        </Button>
    }
  </>
}

export default Btn
