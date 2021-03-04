import React, { useState, useMemo, useCallback } from 'react'
import ColorBox from '../ColorBox'
import Navbar from '../Navbar'

import './palette.scss'

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500)
  const [format, setFormat] = useState('hex')

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

  const onColorFormatChange = useCallback((newColorFormat) => {
    setFormat(newColorFormat)
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
      <footer className="palette__footer">
        {palette.paletteName}{' '}
        <span className="palette__footer-emoji">{palette.emoji}</span>
      </footer>
    </div>
  )
}

export default Palette
