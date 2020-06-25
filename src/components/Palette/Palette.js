import React, { useState, useMemo } from 'react'
import ColorBox from '../ColorBox'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import './palette.scss'
import { useCallback } from 'react'

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500)

  const colorBoxes = useMemo(
    () => palette.colors[level].map((color) => <ColorBox {...color} />),
    [palette.colors, level]
  )

  const onSliderChange = useCallback((value) => setLevel(value), [])

  return (
    <div className="palette">
      <Slider
        min={100}
        max={900}
        step={100}
        defaultValue={level}
        onChange={onSliderChange}
      />
      <div className="palette__colors-grid">{colorBoxes}</div>
      {/* Footer */}
    </div>
  )
}

export default Palette
