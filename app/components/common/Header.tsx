import React from 'react'
import styled from 'styled-components'
import Title from './titles/title'

const Header: React.FC = () => {
  return (
    <Container>
      <Title align='center'>
            {'Rick and Morty App'}
          </Title>
    </Container>
  )
}

const Container = styled.header`
  width: 100%;
  min-height: 56px;
  background-color: #1f1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Header