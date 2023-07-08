import styled from 'styled-components/native'

import { type TypographyProps } from '.'
import { colors, fontSize } from 'src/presentation/style'

export const TextComponent = styled.Text<TypographyProps>`
  font-size: ${({ size }) => fontSize[size ?? 'm']};
  font-weight: ${({ strong }) => (strong ? 'bold' : 'normal')};
  color: ${props => (props.color ? colors[props.color] : colors.white)};
`
