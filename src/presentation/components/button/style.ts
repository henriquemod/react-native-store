import styled from 'styled-components/native'

import { appColors, appFixedValues, appSpacings } from 'src/presentation/style'
import type { NButton } from '.'

export const ButtonComponent = styled.TouchableOpacity<NButton.Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${props =>
    props.rounded
      ? appFixedValues.borderRounded
      : appFixedValues.borderRadius}px;
  padding: ${props =>
    props.padding ? props.padding : `${appSpacings.xs}px ${appSpacings.m}px`};
  background-color: ${props =>
    props.color ? appColors[props.color] : appColors.white};
  ${props => props.width && `width: ${props.width};`}
  ${props => props.height && `height: ${props.height};`}
`
