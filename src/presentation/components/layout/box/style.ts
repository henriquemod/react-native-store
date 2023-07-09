import styled from 'styled-components/native'

import { colors, fixedValues, spacings } from 'src/presentation/style'
import type { BoxProps } from '.'

export const BoxComponent = styled.View<BoxProps>`
  background-color: ${props =>
    props.color ? colors[props.color] : colors.white};
  position: relative;
  border-radius: ${fixedValues.borderRadius}px;
  padding: ${props =>
    props.padding ? `${props.padding}px` : `${spacings.m}px`};
  ${props =>
    props.width &&
    `width: ${
      typeof props.width === 'string'
        ? props.width
        : props.width.toString() + 'px'
    };`}
  ${props =>
    props.height &&
    `height: ${
      typeof props.height === 'string'
        ? props.height
        : props.height.toString() + 'px'
    };`}
`
