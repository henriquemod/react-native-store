import { Dimensions } from 'react-native'

import fixedValues from './fixed-values'

type Space = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
type Spacing = { [key in Space]: number }

const convertFontSize = (size: number) => {
  return Math.round(
    (size * Dimensions.get('window').width) / fixedValues.widthDivider,
  )
}

const sizes: Spacing = {
  xxs: 2,
  xs: 4,
  s: 8,
  m: 12,
  l: 16,
  xl: 20,
  xxl: 24,
}

const spacing: Spacing = {
  xxs: convertFontSize(sizes.xxs),
  xs: convertFontSize(sizes.xs),
  s: convertFontSize(sizes.s),
  m: convertFontSize(sizes.m),
  l: convertFontSize(sizes.l),
  xl: convertFontSize(sizes.xl),
  xxl: convertFontSize(sizes.xxl),
}

export default spacing
