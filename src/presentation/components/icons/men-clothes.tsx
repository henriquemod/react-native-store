import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { appColors, appSizes } from 'src/presentation/style'
import type { Colors } from 'src/presentation/style/colors'

export interface TIconProps {
  color?: Colors
  height?: string
  width?: string
}

const MenClothes = (props: TIconProps) => {
  const {
    color = 'black',
    height = appSizes.size.s,
    width = appSizes.size.s,
  } = props
  return (
    <Svg
      fill={appColors[color]}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      data-name="Layer 1"
      id="Layer_1"
    >
      <Path d="M14.43,3l-.29.49a2.5,2.5,0,0,1-4.29,0L9.57,3H6.76L2,5.38V11H6V21H18V11h4V5.38L17.24,3Z" />
    </Svg>
  )
}

export default MenClothes
