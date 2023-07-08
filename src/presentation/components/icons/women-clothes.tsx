import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { colors, sizes } from 'src/presentation/style'
import type { Colors } from 'src/presentation/style/colors'

export interface TIconProps {
  color?: Colors
  height?: string
  width?: string
}

const WomenClothes = (props: TIconProps) => {
  const { color = 'black', height = sizes.s, width = sizes.s } = props
  return (
    <Svg fill={colors[color]} width={width} height={height} viewBox="0 0 24 24">
      <Path d="M20,8H17V7A5,5,0,0,0,7,7V8H4a2,2,0,0,0-2,2v8a4,4,0,0,0,4,4H18a4,4,0,0,0,4-4V10A2,2,0,0,0,20,8ZM9,7a3,3,0,0,1,6,0V8H9Zm6,10H9a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z" />
    </Svg>
  )
}

export default WomenClothes
