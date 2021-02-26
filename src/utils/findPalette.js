import seedColors from './seedColors'
import generatePalette from './colorHelpers'

const findPalette = (id) => {
  // finds the palette that matched the id
  const palette = seedColors.find((seedColor) => seedColor.id === id)
  return generatePalette(palette)
}

export default findPalette
