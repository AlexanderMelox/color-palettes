import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import ColorBox from '../ColorBox'

const Palette = ({ colors }) => {
  const colorBoxes = useMemo(
    () =>
      colors.map((color) => <ColorBox color={color.color} name={color.name} />),
    [colors]
  )

  return (
    <StyledPalette className="palette">
      {/* Navbar */}
      <ColorsGrid>{colorBoxes}</ColorsGrid>
      {/* Footer */}
    </StyledPalette>
  )
}

const StyledPalette = styled.div`
  height: 100vh;
`

const ColorsGrid = styled.div`
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
`

export default Palette
