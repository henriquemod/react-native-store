import { appColors } from 'src/presentation/style'
import type { NOrderList } from '.'

const AVAILABLE_COLORS = [appColors.dust, appColors.rose, appColors.blueBaby]
const opacityMap = new Map<string, number>([
  [appColors.dust, 0.25],
  [appColors.rose, 0.25],
  [appColors.blueBaby, 1],
])

const generateColors = (size: number) => {
  const colors: NOrderList.ColorSchema[] = []
  for (let i = 0; i < size; i++) {
    const colorIndex = i % AVAILABLE_COLORS.length
    const color = AVAILABLE_COLORS[colorIndex]
    const opacity = opacityMap.get(color) ?? 0.25
    colors.push({ color, opacity })
  }
  return colors
}

export default generateColors
