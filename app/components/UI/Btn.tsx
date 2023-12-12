'use client'

import Link from "next/link"
import styled, { css } from "styled-components"
import cat from "@/assets/list.svg"

export type BtnSizeType = 'small' | 'medium' | 'large'
export type BtnColorType = 'success' | 'danger' | 'white'
export type BtnIconType = "cat" | boolean

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
  icon?: BtnIconType
}

// Styles
const btnStyles = css<{ $size: BtnSizeType, $color: BtnColorType, $expand: boolean, $icon?: BtnIconType }>`
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
    background-color: var(--color-${({ $color }) => $color}-hover);
    text-decoration: none;
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
  @media screen and (max-width: 720px) {
    ${({ $icon }) => $icon === 'cat' && `
      background-image: url(${cat.src});
      background-position: center;
      background-repeat: no-repeat;
      background-size: 24px;
      text-indent: -9999px;
      width: 42px;
      height: 42px;
      padding: 0;
    `}
  }
`
const Button = styled.button<{ $size: BtnSizeType, $color: BtnColorType, $expand: boolean, $icon?: BtnIconType }>`
  ${btnStyles}
`
const LinkButton = styled(Link)<{ $size: BtnSizeType, $color: BtnColorType, $expand: boolean, $icon?: BtnIconType }>`
  ${btnStyles}
`

const Btn: React.FC<IBtn> = ({ expand = false, disabled, handler, title, to, size = 'medium', color = 'white', load = false, type = "button", icon = false }) => {
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
          $icon={icon}
        >
          {title}
          {load && <span className="spinner-border spinner-border-sm ms-2"></span>}
        </Button>
    }
  </>
}

export default Btn
