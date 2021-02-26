import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { findPalette } from '../../utils'
import Palette from '../../components/Palette'

const PalettePage = () => {
  const params = useParams()
  const palette = useMemo(() => findPalette(params.id), [params])

  return <Palette palette={palette} />
}

export default PalettePage
