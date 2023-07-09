import styled from 'styled-components/native'

import {
  appSizes,
  appColors,
  appFixedValues,
  appSpacings,
} from 'src/presentation/style'

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
  background-color: ${appColors.white};
  padding: 0 ${appSpacings.s}px;
  border-radius: ${appFixedValues.borderRounded}px;
  height: ${appSizes.size.xxs2};
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
  gap: ${appSpacings.m}px;
  align-items: center;
`
