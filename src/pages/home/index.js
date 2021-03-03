import React from 'react'
import { seedColors } from '../../utils'
import PaletteList from '../../components/PaletteList'

const HomePage = () => {
  return (
    <div>
      <PaletteList palettes={seedColors} />
    </div>
  )
}

export default HomePage
