import { Dimensions } from 'react-native'

import fixedValues from './fixed-values'
import type { Size } from '.'

type SizeObj<T = number> = { [key in Size]: T }

const convertSizeToPx = (size: number) => {
  return `${Math.round(
    (size * Dimensions.get('window').width) / fixedValues.widthDivider,
  )}px`
}

const sizes: SizeObj = {
  xxs: 12,
  xs: 24,
  s: 32,
  m: 40,
  l: 48,
  xl: 56,
  xxl: 64,
}

const size: SizeObj<string> = {
  xxs: convertSizeToPx(sizes.xxs),
  xs: convertSizeToPx(sizes.xs),
  s: convertSizeToPx(sizes.s),
  m: convertSizeToPx(sizes.m),
  l: convertSizeToPx(sizes.l),
  xl: convertSizeToPx(sizes.xl),
  xxl: convertSizeToPx(sizes.xxl),
}

export default size
