import React, { useState, useMemo, useCallback } from 'react'
import ColorBox from '../ColorBox'
import Navbar from '../Navbar'

import './palette.scss'

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500)

  const colorBoxes = useMemo(
    () => palette.colors[level].map((color) => <ColorBox {...color} />),
    [palette.colors, level]
  )

  const onSliderChange = useCallback((value) => setLevel(value), [])

  return (
    <div className="palette">
      <Navbar level={level} onSliderChange={onSliderChange} />
      <div className="palette__colors-grid">{colorBoxes}</div>
      {/* Footer */}
    </div>
  )
}

export default Palette
