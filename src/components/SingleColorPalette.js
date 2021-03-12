import React from 'react'
import ColorBox from './ColorBox'

const SingleColorPalette = ({ shades }) => {
  return (
    <div className="palette">
      <h1>Single palette</h1>
      <div className="palette__colors-grid">
        {shades.map((color) => (
          <ColorBox
            showLink={false}
            id={color.id}
            name={color.name}
            color={color.hex}
          />
        ))}
      </div>
    </div>
  )
}

export default SingleColorPalette
