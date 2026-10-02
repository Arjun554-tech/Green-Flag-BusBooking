import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: #0ae415ee;
  color: white;
  text-align: center;
  padding: 1rem;
  font-weight: bold;
`

const HeaderTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
`

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>Flix Bus Booking</HeaderTitle>
    </HeaderContainer>
  )
}