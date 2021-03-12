import { useState, useCallback } from 'react'

const useColorFormat = () => {
  const [format, setFormat] = useState('hex')

  const onColorFormatChange = useCallback((newColorFormat) => {
    setFormat(newColorFormat)
  }, [])

  return { format, onColorFormatChange }
}

export default useColorFormat
