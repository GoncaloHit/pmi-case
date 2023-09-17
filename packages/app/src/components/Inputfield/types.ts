import { ChangeEvent } from 'react'

export type InputfieldProps = {
  type?: 'text' | 'number'
  name: string,
  value: string | number,
  placeholder: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
};
