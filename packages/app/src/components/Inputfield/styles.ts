import styled from 'styled-components'

export const $InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 56px;
  height: max-content;
  border-radius: 4px;
  padding: 0 16px 0 16px;
`

export const $InputField = styled.input`
  width: 100%;
  height: 56px;
  outline: none;
  appearance: none;
  border: none;
  background-color: transparent;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.5px;
`