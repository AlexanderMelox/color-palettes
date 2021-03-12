const gatherShadesForOneColor = (palette, colorId) => {
  let shades = []

  /** 
    Go through each palette color level 
    Ex: 50, 100, 200, ...etc
  */
  for (let key in palette.colors) {
    /**
      For each key, which will be the color level, 50, 100, 200, ...etc
      we find the color level that matched the colorId

      Ex: We look into the 50 level for the palette and pull
          out the color in the 50 level and then the 100 level
          and so on.
    */
    shades.push(palette.colors[key].filter((color) => color.id === colorId)[0])
  }

  // Only returns the shades from 100 -> 900
  shades = shades.slice(1, shades.length)

  return shades
}

export default gatherShadesForOneColor
