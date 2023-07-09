import { Dimensions } from 'react-native'
import fixedValues from './fixed-values'
import { type Size } from '.'

type Spacing = { [key in Size]: number }

const { get } = Dimensions

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
  xxxs: Math.round(
    (sizes.xxxs * get('window').width) / fixedValues.widthDivider,
  ),
  xxs: Math.round((sizes.xxs * get('window').width) / fixedValues.widthDivider),
  xxs2: Math.round(
    (sizes.xxs2 * get('window').width) / fixedValues.widthDivider,
  ),
  xs: Math.round((sizes.xs * get('window').width) / fixedValues.widthDivider),
  s: Math.round((sizes.s * get('window').width) / fixedValues.widthDivider),
  m: Math.round((sizes.m * get('window').width) / fixedValues.widthDivider),
  l: Math.round((sizes.l * get('window').width) / fixedValues.widthDivider),
  xl: Math.round((sizes.xl * get('window').width) / fixedValues.widthDivider),
  xxl: Math.round((sizes.xxl * get('window').width) / fixedValues.widthDivider),
  xxl2: Math.round(
    (sizes.xxl2 * get('window').width) / fixedValues.widthDivider,
  ),
}

export default spacing
