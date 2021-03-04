import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import MiniPalette from '../MiniPalette'

const PaletteList = ({ palettes }) => {
  const history = useHistory()
  const goToPalette = (id) => history.push(`/palette/${id}`)

  return (
    <Wrapper>
      <Container>
        <Nav>
          <h1>React colors</h1>
          <a href="#">Create palette</a>
        </Nav>

        <Palettes>
          {palettes.map((palette) => (
            <MiniPalette
              key={palette.id}
              id={palette.id}
              paletteName={palette.paletteName}
              colors={palette.colors}
              emoji={palette.emoji}
              goToPalette={() => goToPalette(palette.id)}
            />
          ))}
        </Palettes>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: blue;
  min-height: 100vh;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  max-width: 800px;
`

const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: white;

  a {
    color: white;
  }
`

const Palettes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`

export default PaletteList
