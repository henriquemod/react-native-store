import * as React from 'react'
import type { TextProps } from 'react-native'

import { type Size } from 'src/presentation/style'
import { TextComponent } from './style'
import type { Colors } from 'src/presentation/style/colors'

export interface TypographyProps extends TextProps {
  strong?: boolean
  dark?: boolean
  size?: Size
  color?: Colors
}

const Typography = (props: TypographyProps) => {
  return <TextComponent {...props} />
}

export default React.memo(Typography)
