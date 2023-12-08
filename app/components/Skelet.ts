'use client'

import { styled } from "styled-components"

// Styles
export const Skelet = styled.div<{ $size?: 'h1' | 'line' | 'button' }>`
  background: var(--color-light);
  border-radius: var(--radius);
  height: ${({ $size }) => (
    $size === 'h1' ? 40 :
    $size === 'line' ? 16 :
    $size === 'button' ? 44 :
    24
  )}px;
  margin: 0 0 var(--gap);
`