import React from 'react'
import { Link } from 'react-router-dom'
import MiniPalette from '../MiniPalette'

const PalletteList = ({ palettes }) => {
  return (
    <div>
      <h1>React colors</h1>
      {palettes.map((palette) => (
        <MiniPalette
          key={palette.id}
          id={palette.id}
          paletteName={palette.paletteName}
          color={palette.colors}
          emoji={palette.emoji}
        />
      ))}
    </div>
  )
}

export default PalletteList
