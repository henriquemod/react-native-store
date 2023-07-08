import styled from 'styled-components/native'

import { colors, fixedValues, spacings } from 'src/presentation/style'
import type { NButton } from '.'

export const ButtonComponent = styled.TouchableOpacity<NButton.Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${props =>
    props.rounded ? fixedValues.borderRounded : fixedValues.borderRadius}px;
  padding: ${spacings.xs}px ${spacings.m}px;
  background-color: ${props =>
    props.color ? colors[props.color] : colors.white};
  ${props => props.width && `width: ${props.width};`}
  ${props => props.height && `height: ${props.height};`}
`
