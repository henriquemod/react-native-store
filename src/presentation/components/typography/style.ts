import styled from 'styled-components/native'

import { type TypographyProps } from '.'
import { appColors, appFontSize } from 'src/presentation/style'

export const TextComponent = styled.Text<TypographyProps>`
  font-size: ${({ size }) => appFontSize[size ?? 'm']};
  font-weight: ${({ strong }) => (strong ? 'bold' : 'normal')};
  color: ${props => {
    const color = props.color
    if (!color) return appColors.white
    const isRGBA = color.includes('rgba')
    return isRGBA ? color : appColors[color]
  }};
`
