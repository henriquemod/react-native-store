import { Dimensions } from 'react-native'
import { styled } from 'styled-components/native'

import { appColors } from 'src/presentation/style'
import color from 'src/presentation/style/colors'

const ovalWidth = Dimensions.get('window').width * 1.25

export const Container = styled.View`
  position: relative;
  display: flex;
  background-color: ${appColors.white};
  justify-content: flex-start;
  align-items: center;
  height: 100%;
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
