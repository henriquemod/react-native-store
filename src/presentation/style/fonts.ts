import { Dimensions } from 'react-native'
import fixedValues from './fixed-values'
import type { Size } from '.'

type FontSize = { [key in Size]: string }

const convertFontSize = (size: number): string => {
  const { width } = Dimensions.get('window')
  return `${Math.round((size * width) / fixedValues.widthDivider)}px`
}

const font: FontSize = {
  xxxs: convertFontSize(8),
  xxs: convertFontSize(10),
  xxs2: convertFontSize(11),
  xs: convertFontSize(12),
  s: convertFontSize(14),
  m: convertFontSize(16),
  l: convertFontSize(18),
  xl: convertFontSize(20),
  xxl: convertFontSize(24),
  xxl2: convertFontSize(32),
}

export default font
