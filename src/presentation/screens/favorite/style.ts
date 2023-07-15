import { Dimensions } from 'react-native'
import { styled } from 'styled-components/native'

import { appColors, appSizes, appSpacings } from 'src/presentation/style'
import color from 'src/presentation/style/colors'

const ovalWidth = Dimensions.get('window').width * 1.25

export const Container = styled.View`
  position: relative;
  display: flex;
  background-color: ${appColors.white};
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: ${`0 ${appSizes.size.xxs}`};
`

export const HeaderContainer = styled.View`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${appSizes.size.xl};
  margin-bottom: ${appSpacings.l}px;
`

export const RowContainer = styled.View`
  width: 100%;
  margin-bottom: ${appSpacings.xxl2}px;
  gap: ${appSpacings.xxl}px;
  margin-top: ${appSpacings.m}px;
`

export const AboutContainer = styled.View`
  width: 100%;
  gap: ${appSpacings.s}px;
`

export const ImageContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Oval = styled.View`
  position: absolute;
  z-index: -1;
  width: ${ovalWidth}px;
  height: ${ovalWidth}px;
  border-radius: ${ovalWidth / 2}px;
  background-color: ${color.gray};
  top: -${ovalWidth / 2.7}px;
  right: -20px;
`

export const PriceContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: ${appSpacings.m}px;
  align-items: center;
`

export const Header = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${appSpacings.s}px;
  align-items: flex-start;
  justify-content: flex-end;
`

export const TotalValueRow = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const BackContainer = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
  display: flex;
  justify-content: center;
`
