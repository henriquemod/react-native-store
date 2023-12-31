import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { appColors, appSizes } from 'src/presentation/style'
import type { Colors } from 'src/presentation/style/colors'

export interface TIconProps {
  color?: Colors
  height?: string
  width?: string
}

const ArrowBack = (props: TIconProps) => {
  const {
    color = 'black',
    height = appSizes.size.s,
    width = appSizes.size.s,
  } = props
  return (
    <Svg
      fill={appColors[color]}
      height={height}
      width={width}
      viewBox="0 0 486.975 486.975"
      stroke={appColors[color]}
      strokeWidth={28}
    >
      <Path
        d="M473.475,230.025h-427.4l116-116c5.3-5.3,5.3-13.8,0-19.1c-5.3-5.3-13.8-5.3-19.1,0l-139,139c-5.3,5.3-5.3,13.8,0,19.1
		l139,139c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-116-116h427.5c7.5,0,13.5-6,13.5-13.5
		S480.975,230.025,473.475,230.025z"
      />
    </Svg>
  )
}

export default ArrowBack
