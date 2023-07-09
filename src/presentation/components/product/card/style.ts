import styled from 'styled-components/native'

import { colors, fixedValues, sizes, spacings } from 'src/presentation/style'

export const Header = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const PromotionTag = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  padding: 0 ${spacings.s}px;
  border-radius: ${fixedValues.borderRounded}px;
  height: ${sizes.xxs2};
`

export const Bottom = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

export const ProductImageContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const PriceContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  gap: ${spacings.m}px;
  align-items: center;
`
