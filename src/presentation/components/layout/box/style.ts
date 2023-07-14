import styled from 'styled-components/native'

import { appColors, appFixedValues, appSpacings } from 'src/presentation/style'
import type { BoxProps } from '.'

export const BoxComponent = styled.View<BoxProps>`
  background-color: ${props =>
    props.color ? appColors[props.color] : appColors.white};
  position: relative;
  border-radius: ${appFixedValues.borderRadius}px;
  padding: ${props =>
    props.padding ? `${props.padding}px` : `${appSpacings.m}px`};
  ${props =>
    props.width &&
    `width: ${
      typeof props.width === 'string'
        ? props.width
        : props.width.toString() + 'px'
    };`}
  ${props => props.fullWidth && `width: 100%;`}
  ${props =>
    props.height &&
    `height: ${
      typeof props.height === 'string'
        ? props.height
        : props.height.toString() + 'px'
    };`}
`
