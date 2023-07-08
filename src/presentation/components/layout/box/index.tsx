import * as React from 'react'
import type { ViewProps } from 'react-native'

import { BoxComponent } from './style'
import type { Colors } from 'src/presentation/style/colors'

export interface BoxProps extends ViewProps {
  color?: Colors
  width?: React.CSSProperties['width']
  height?: React.CSSProperties['height']
}

const Box = (props: BoxProps) => {
  return <BoxComponent {...props} />
}

export default Box
