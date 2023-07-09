import styled from 'styled-components/native'

import { appSpacings } from 'src/presentation/style'

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${appSpacings.m}px;
`

export const HeaderContainer = styled.View`
  margin: 0px ${appSpacings.s}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const LabelsContainer = styled.View`
  display: flex;
  flex-direction: column;
`
