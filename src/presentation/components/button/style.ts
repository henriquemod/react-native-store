import { type TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'

import { colors, fixedValues, spacings } from 'src/presentation/style'

export const ButtonComponent = styled.TouchableOpacity<TouchableOpacityProps>`
  border-radius: ${fixedValues.borderRounded}px;
  padding: ${spacings.xs}px ${spacings.m}px;
  background-color: ${colors.white};
`
