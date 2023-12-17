import React from 'react'
import { styled } from 'styled-components'

interface IPackage {
  active: boolean
  title: string
  value: number
  handler: (id: number, name: string) => void
}

// Styles
const PackBtn = styled.button<{ $active: boolean }>`
  background: var(--color-${props => props.$active ? 'success-light' : 'white'});
  border: 1px solid var(--color-${props => props.$active ? 'success' : 'light'});
  border-radius: var(--radius);
  color: var(--color-text);
  cursor: pointer;
  display: block;
  font-size: 14px;
  line-height: 20px;
  padding: 4px 8px;
  margin: 0 4px 0 0;
  min-width: 40px;
  text-align: center;
`

const Package: React.FC<IPackage> = ({ active, title, value, handler }) => {
  return (
    <PackBtn $active={active} onClick={() => handler(value, title)}>{title}</PackBtn>
  )
}

export default Package