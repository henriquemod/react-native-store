import styled from 'styled-components/native'

import { spacings } from 'src/presentation/style'

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${spacings.m}px;
`

export const HeaderContainer = styled.View`
  margin: 0px ${spacings.s}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const LabelsContainer = styled.View`
  display: flex;
  flex-direction: column;
`
