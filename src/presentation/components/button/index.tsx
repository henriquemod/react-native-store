import * as React from 'react'
import type { TouchableOpacityProps } from 'react-native'

import { ButtonComponent } from './style'

const Button = (props: TouchableOpacityProps) => {
  return <ButtonComponent activeOpacity={0.85} {...props} />
}

export default Button
