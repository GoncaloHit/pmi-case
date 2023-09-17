import { FC } from 'react'
import { $InputContainer, $InputField } from './styles'
import { InputfieldProps as Props } from './types'

export const Inputfield: FC<Props> = ({
  type = 'text', name, value, placeholder, ...rest
}) => (
  <$InputContainer>
    <$InputField
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      {...rest}
    />
  </$InputContainer>
)