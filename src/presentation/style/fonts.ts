import { Dimensions } from 'react-native'

import fixedValues from './fixed-values'
import type { Size } from '.'

type FontValues = { [key in Size]: number }
type FontSize = { [key in Size]: string }

const convertFontSize = (size: number) => {
  return `${Math.round(
    (size * Dimensions.get('window').width) / fixedValues.widthDivider,
  )}px`
}

const sizes: FontValues = {
  xxxs: 8,
  xxs: 10,
  xxs2: 11,
  xs: 12,
  s: 14,
  m: 16,
  l: 18,
  xl: 20,
  xxl: 24,
  xxl2: 32,
}

const font: FontSize = {
  xxxs: convertFontSize(sizes.xxxs),
  xxs: convertFontSize(sizes.xxs),
  xxs2: convertFontSize(sizes.xxs2),
  xs: convertFontSize(sizes.xs),
  s: convertFontSize(sizes.s),
  m: convertFontSize(sizes.m),
  l: convertFontSize(sizes.l),
  xl: convertFontSize(sizes.xl),
  xxl: convertFontSize(sizes.xxl),
  xxl2: convertFontSize(sizes.xxl2),
}

export default font
