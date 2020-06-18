import React, { useMemo } from 'react'
import ColorBox from '../ColorBox'

import './palette.scss'

const Palette = ({ colors }) => {
  const colorBoxes = useMemo(
    () =>
      colors.map((color) => <ColorBox color={color.color} name={color.name} />),
    [colors]
  )

  return (
    <div className="palette">
      {/* Navbar */}
      <div className="palette__colors-grid">{colorBoxes}</div>
      {/* Footer */}
    </div>
  )
}

export default Palette
