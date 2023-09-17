import styled from "styled-components"

export const $Header = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.primary};
`