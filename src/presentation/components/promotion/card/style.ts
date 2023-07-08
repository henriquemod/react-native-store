import styled from 'styled-components/native'

import spacing from 'src/presentation/style/spacings'

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: ${spacing.m}px;
  align-items: flex-start;
`
