import styled from "styled-components"

export const $App = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const $Header = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.primary}
`
export const $Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`