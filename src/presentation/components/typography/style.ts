import styled from 'styled-components/native'

import { type TypographyProps } from '.'
import { appColors, appFontSize } from 'src/presentation/style'

export const TextComponent = styled.Text<TypographyProps>`
  font-size: ${({ size }) => appFontSize[size ?? 'm']};
  font-weight: ${({ strong }) => (strong ? 'bold' : 'normal')};
  color: ${props => (props.color ? appColors[props.color] : appColors.white)};
`
