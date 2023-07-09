import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { colors, sizes } from 'src/presentation/style'
import type { Colors } from 'src/presentation/style/colors'

export interface TIconProps {
  color?: Colors
  height?: string
  width?: string
}

const Favorites = (props: TIconProps) => {
  const { color = 'black', height = sizes.s, width = sizes.s } = props
  return (
    <Svg width={width} height={height} viewBox="2 2 42 44">
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth={2.2}
        stroke={colors[color]}
        d="m43,17.0766c0-5.6539-4.5835-10.2373-10.2374-10.2373-3.7223,0-6.9708,1.9932-8.7626,4.964-1.7919-2.9708-5.0403-4.964-8.7626-4.964-5.6539,0-10.2373,4.5834-10.2373,10.2373,0,1.2925.2496,2.524.6866,3.6627,3.3851,9.7368,18.3134,20.4215,18.3134,20.4215,0,0,14.9282-10.6847,18.3134-20.4215.437-1.1386.6867-2.3702.6867-3.6627Z"
      />
    </Svg>
  )
}

export default Favorites
