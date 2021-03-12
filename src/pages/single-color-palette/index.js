import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import SingleColorPalette from '../../components/SingleColorPalette'
import { findPalette, gatherShadesForOneColor } from '../../utils'

const SingleColorPalettePage = () => {
  const params = useParams()

  const palette = useMemo(() => findPalette(params.paletteId), [
    params.paletteId,
  ])

  const shades = useMemo(
    () => gatherShadesForOneColor(palette, params.colorId),
    []
  )

  return (
    <div>
      <SingleColorPalette shades={shades} />
    </div>
  )
}

export default SingleColorPalettePage
