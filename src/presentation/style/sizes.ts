import { Dimensions } from 'react-native'

import fixedValues from './fixed-values'
import type { Size } from '.'

type SizeObj<T = number> = { [key in Size]: T }

const convertSizeToPx = (size: number, raw?: boolean) => {
  const rawValue = Math.round(
    (size * Dimensions.get('window').width) / fixedValues.widthDivider,
  )
  return {
    raw: rawValue,
    string: `${rawValue}px`,
  }
}

const sizes: SizeObj = {
  xxxs: 8,
  xxs: 12,
  xxs2: 18,
  xs: 24,
  s: 32,
  m: 40,
  l: 48,
  xl: 56,
  xxl: 64,
}

export const sizeRaw: SizeObj<number> = {
  xxxs: convertSizeToPx(sizes.xxxs, true).raw,
  xxs: convertSizeToPx(sizes.xxs, true).raw,
  xxs2: convertSizeToPx(sizes.xxs2, true).raw,
  xs: convertSizeToPx(sizes.xs, true).raw,
  s: convertSizeToPx(sizes.s, true).raw,
  m: convertSizeToPx(sizes.m, true).raw,
  l: convertSizeToPx(sizes.l, true).raw,
  xl: convertSizeToPx(sizes.xl, true).raw,
  xxl: convertSizeToPx(sizes.xxl, true).raw,
}

const size: SizeObj<string> = {
  xxxs: convertSizeToPx(sizes.xxxs).string,
  xxs: convertSizeToPx(sizes.xxs).string,
  xxs2: convertSizeToPx(sizes.xxs2).string,
  xs: convertSizeToPx(sizes.xs).string,
  s: convertSizeToPx(sizes.s).string,
  m: convertSizeToPx(sizes.m).string,
  l: convertSizeToPx(sizes.l).string,
  xl: convertSizeToPx(sizes.xl).string,
  xxl: convertSizeToPx(sizes.xxl).string,
}

export default size
