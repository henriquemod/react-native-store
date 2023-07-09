import { Dimensions } from 'react-native'

import fixedValues from './fixed-values'
import { type Size } from '.'

type Spacing = { [key in Size]: number }

const convertFontSize = (size: number) => {
  return Math.round(
    (size * Dimensions.get('window').width) / fixedValues.widthDivider,
  )
}

const sizes: Spacing = {
  xxxs: 1,
  xxs: 2,
  xxs2: 3,
  xs: 4,
  s: 8,
  m: 12,
  l: 16,
  xl: 20,
  xxl: 24,
  xxl2: 32,
}

const spacing: Spacing = {
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

export default spacing
