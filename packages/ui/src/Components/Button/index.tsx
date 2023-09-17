import React, { FC } from 'react'
import { $Button } from './styles'
import { ButtonProps as Props } from './types'

export const Button: FC<Props> = ({ variant, onClick, children, ...props }) => (
  <$Button
    variant={variant}
    onClick={onClick}
    {...props}
  >
    {children}
  </$Button>
)
