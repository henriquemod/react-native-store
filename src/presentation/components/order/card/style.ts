import { appSizes } from 'src/presentation/style'
import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  gap: ${appSizes.sizeRaw.xxs}px;
`

export const ContentContainer = styled.View`
  gap: ${appSizes.sizeRaw.xxs}px;
`
