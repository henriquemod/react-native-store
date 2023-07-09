/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Dimensions } from 'react-native'
import fixedValues from './fixed-values'
import type { Size } from '.'

type SizeObj<T = number> = { [key in Size]: T } & Record<string, T>

const windowWidth = Dimensions.get('window').width

const convertSizeToPx = (size: number) => {
  const rawValue = Math.round((size * windowWidth) / fixedValues.widthDivider)
  return {
    raw: rawValue,
    string: `${rawValue}px`,
  }
}

const sizes: SizeObj<number> = {
  xxxs: 8,
  xxs: 12,
  xxs2: 18,
  xs: 24,
  s: 32,
  m: 40,
  l: 48,
  xl: 56,
  xxl: 64,
  xxl2: 84,
}

const sizeRaw: SizeObj<number> = {} as SizeObj<number>
const size: SizeObj<string> = {} as SizeObj<string>

for (const key in sizes) {
  const sizeValue = sizes[key]
  const { raw, string } = convertSizeToPx(sizeValue)

  sizeRaw[key] = raw
  size[key] = string
}

const appSizes = { sizeRaw, size }

export default appSizes
