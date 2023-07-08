import { Dimensions } from 'react-native'

import fixedValues from './fixed-values'
import type { Size } from './sizes'

type FontValues = { [key in Size]: number }
type FontSize = { [key in Size]: string }

const convertFontSize = (size: number) => {
  return `${Math.round(
    (size * Dimensions.get('window').width) / fixedValues.widthDivider,
  )}px`
}

const sizes: FontValues = {
  xxs: 10,
  xs: 12,
  s: 14,
  m: 16,
  l: 18,
  xl: 20,
  xxl: 24,
}

const font: FontSize = {
  xxs: convertFontSize(sizes.xxs),
  xs: convertFontSize(sizes.xs),
  s: convertFontSize(sizes.s),
  m: convertFontSize(sizes.m),
  l: convertFontSize(sizes.l),
  xl: convertFontSize(sizes.xl),
  xxl: convertFontSize(sizes.xxl),
}

export default font
