'use client'

import { styled } from "styled-components"

// Styles
export const Skelet = styled.div<{
  $size?: 'h1' | 'line' | 'button',
  $margin?: 'none' | 'small' | 'big',
  $width?: 'full' | 'text' | 'button' | 'title'
}>`
  background: var(--color-light);
  border-radius: var(--radius);
  height: ${({ $size }) => (
    $size === 'h1' ? 40 :
    $size === 'line' ? 16 :
    $size === 'button' ? 44 :
    24
  )}px;
  margin: 0 0 ${props => 
    props.$margin === 'big' ? 'var(--gap)' :
    props.$margin === 'none' ? '0' :
    'var(--pb)'
  };
  max-width: ${({ $width }) => 
    $width === 'button' ? '200px' :
    $width === 'text' ? '60%' :
    $width === 'title' ? '80%' :
    'none'
  };
`