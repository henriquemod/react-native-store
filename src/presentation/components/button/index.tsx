import * as React from 'react'
import type { TouchableOpacityProps } from 'react-native'

import { ButtonComponent } from './style'
import type { Colors } from 'src/presentation/style/colors'

export namespace NButton {
  export interface Props extends TouchableOpacityProps {
    color?: Colors
    width?: string
    height?: string
    rounded?: boolean
  }
}

const Button = (props: NButton.Props) => {
  return <ButtonComponent activeOpacity={0.85} {...props} />
}

export default Button
