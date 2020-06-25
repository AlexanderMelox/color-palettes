import chroma from 'chroma-js'

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

const generatePalette = (starterPalette) => {
  const newPalette = {
    ...starterPalette,
    // Creates an obj with keys as the levels of colors
    colors: levels.reduce((obj, level) => {
      obj[level] = []
      return obj
    }, {}),
  }

  starterPalette.colors.forEach(({ color, name }) => {
    const scale = generateScale(color, 10).reverse()
    scale.forEach((_, i) =>
      newPalette.colors[levels[i]].push({
        name: `${name} ${levels[i]}`,
        id: name.toLowerCase().replace(/ /g, '-'),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace('rgb', 'rgba')
          .replace(')', ', 1.0)'),
      })
    )
  })

  return newPalette
}

const getRange = (hexColor) => {
  const start = chroma(hexColor).darken(1.4).hex()
  const end = '#fff'
  // Returns an array of 3 items to create a range
  return [start, hexColor, end]
}

const generateScale = (hexColor, numberOfColors) => {
  return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors)
}

export default generatePalette
