import React from 'react'
import Navbar from './Navbar'
import ColorBox from './ColorBox'
import useColorFormat from '../hooks/useColorFormat'
import PaletteFooter from './PaletteFooter'

const SingleColorPalette = ({ shades, palette }) => {
  const { format, onColorFormatChange } = useColorFormat()

  return (
    <div className="palette">
      <Navbar format={format} onColorFormatChange={onColorFormatChange} />
      <div className="palette__colors-grid">
        {shades.map((color) => (
          <ColorBox
            showLink={false}
            id={color.id}
            name={color.name}
            color={color[format]}
          />
        ))}
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  )
}

export default SingleColorPalette
