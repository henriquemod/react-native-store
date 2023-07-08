import { colors } from '../style'

const hexToRgba = (color: string, opacity: number): string => {
  const isValidHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)
  if (!isValidHex) {
    return colors.black
  }
  const hexWithoutHash = color.replace('#', '')
  const red = parseInt(hexWithoutHash.substring(0, 2), 16)
  const green = parseInt(hexWithoutHash.substring(2, 4), 16)
  const blue = parseInt(hexWithoutHash.substring(4, 6), 16)

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`
}

export default hexToRgba
