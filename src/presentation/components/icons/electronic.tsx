import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { appColors, appSizes } from 'src/presentation/style'
import type { Colors } from 'src/presentation/style/colors'

export interface TIconProps {
  color?: Colors
  height?: string
  width?: string
}

const Electronic = (props: TIconProps) => {
  const {
    color = 'black',
    height = appSizes.size.s,
    width = appSizes.size.s,
  } = props
  return (
    <Svg width={width} height={height} viewBox="0 0 14 14">
      <Path
        d="M 9.375,0.03125 C 9.228609,0.0143576 9.069653,0.0553473 8.9375,0.1875 L 6.03125,3.125 4.125,1.1875 C 3.913054,0.9017344 3.437513,0.8725487 3.1875,1.125 2.937487,1.3774513 2.966994,1.8484875 3.25,2.0625 L 5.15625,4 2,4 C 1,4 0,5 0,6 l 0,6 c 0,1 1,2 2,2 l 10,0 c 1,0 2,-1 2,-2 L 14,6 C 14,5 13,4 12,4 L 6.90625,4 9.8125,1.0625 C 10.20002,0.6749802 9.814172,0.0819271 9.375,0.03125 z M 6,6 c 3,0 4,0 4,3 0,3 -1,3 -4,3 C 3,12 2,12 2,9 2,6 3,6 6,6 z m 6,0.125 c 0.483249,0 0.875,0.3917508 0.875,0.875 0,0.4832492 -0.391751,0.875 -0.875,0.875 -0.483249,0 -0.875,-0.3917508 -0.875,-0.875 0,-0.4832492 0.391751,-0.875 0.875,-0.875 z m 0,3 c 0.483249,0 0.875,0.391751 0.875,0.875 0,0.483249 -0.391751,0.875 -0.875,0.875 -0.483249,0 -0.875,-0.391751 -0.875,-0.875 0,-0.483249 0.391751,-0.875 0.875,-0.875 z"
        fill={appColors[color]}
      />
    </Svg>
  )
}

export default Electronic
