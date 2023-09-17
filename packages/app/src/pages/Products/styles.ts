import styled from 'styled-components'

export const $Title = styled.h1``

export const $Card = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  height: max-content;
  max-width: 500px;
  padding: 12px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`

export const $Products = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const $Product = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 12px;
  border: 1px solid black;
`

export const $Row = styled.div`
  display: flex; 
  width: 100%;
  justify-content: space-evenly;
`