import React from 'react'
import styled from 'styled-components/macro'

const MiniPalette = ({ colors, paletteName, emoji, id }) => {
  return (
    <Wrapper>
      <Colors>
        {colors.map(({ color, name }) => (
          <Color key={color.name} bg={color} />
        ))}
      </Colors>
      <Title>
        {paletteName} <Emoji>{emoji}</Emoji>
      </Title>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 0.5rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid black;
`

const Colors = styled.div`
  height: 150px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  border-radius: 5px;
  overflow: hidden;
`

const Color = styled.div`
  background-color: ${(props) => props.bg};
`

const Title = styled.h5`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  color: black;
  padding-top: 0.5rem;
  font-size: 1rem;
  position: relative;
`

const Emoji = styled.span`
  margin-left: 0.5rem;
  font-size: 1.5rem;
`

export default MiniPalette
