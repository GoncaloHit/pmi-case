import styled, { css } from 'styled-components'
import { ButtonProps } from './types'

export const $Button = styled.button<ButtonProps>`
  display: flex;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  padding: 8px 10px;
  font-weight: bold;
    
  &:hover {
    cursor: pointer;
  }

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white}; 
      `
      case 'secondary':
        return css`
          background-color: ${({ theme }) => theme.colors.secondary}; 
          color: ${({ theme }) => theme.colors.white}; 
      `
    }
  }}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`