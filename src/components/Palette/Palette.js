import React, { useState, useMemo, useCallback } from 'react'
import ColorBox from '../ColorBox'
import Navbar from '../Navbar'
import useColorFormat from '../../hooks/useColorFormat'

import './palette.scss'
import PaletteFooter from '../PaletteFooter'

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500)
  const { format, onColorFormatChange } = useColorFormat()

  const colorBoxes = useMemo(() => {
    return palette.colors[level].map((color) => (
      <ColorBox
        key={color.name}
        moreUrl={`/palette/${palette.id}/${color.id}`}
        color={color[format]}
        name={color.name}
      />
    ))
  }, [palette, level, format])

  const onSliderChange = useCallback((value) => {
    setLevel(value)
  }, [])

  return (
    <div className="palette">
      <Navbar
        level={level}
        format={format}
        onSliderChange={onSliderChange}
        onColorFormatChange={onColorFormatChange}
      />
      <div className="palette__colors-grid">{colorBoxes}</div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  )
}

export default Palette
