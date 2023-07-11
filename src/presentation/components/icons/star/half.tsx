import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { appColors, appSizes } from 'src/presentation/style'
import type { Colors } from 'src/presentation/style/colors'

export interface TIconProps {
  color?: Colors
  height?: string
  width?: string
}

const HalfStar = (props: TIconProps) => {
  const {
    color = 'yellow',
    height = appSizes.size.xs,
    width = appSizes.size.xs,
  } = props
  return (
    <Svg
      fill={appColors[color]}
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <Path d="M30.859 12.545c-0.168-0.506-0.637-0.864-1.189-0.864h-9.535l-2.946-9.067c-0.168-0.505-0.636-0.863-1.188-0.863-0.138 0-0.272 0.023-0.396 0.064l0.009-0.003c-0.376 0.13-0.664 0.427-0.779 0.8l-0.002 0.009-0.021-0.007-2.946 9.067h-9.534c-0.69 0-1.25 0.56-1.25 1.25 0 0.414 0.202 0.782 0.512 1.009l0.004 0.002 7.713 5.603-2.946 9.068c-0.039 0.116-0.061 0.249-0.061 0.387 0 0.69 0.56 1.25 1.25 1.25 0.276 0 0.531-0.089 0.738-0.241l-0.004 0.002 7.714-5.605 7.713 5.605c0.203 0.149 0.458 0.238 0.734 0.238 0.691 0 1.251-0.56 1.251-1.251 0-0.138-0.022-0.271-0.064-0.395l0.003 0.009-2.947-9.066 7.715-5.604c0.314-0.231 0.515-0.598 0.515-1.013 0-0.137-0.022-0.27-0.063-0.393l0.003 0.009zM20.486 18.057c-0.314 0.231-0.515 0.599-0.515 1.014 0 0.137 0.022 0.27 0.063 0.394l-0.003-0.009 2.039 6.271-5.336-3.877c-0.194-0.135-0.435-0.215-0.694-0.215-0.014 0-0.028 0-0.042 0.001l0.002-0v-14.589l2.037 6.272c0.169 0.505 0.637 0.863 1.189 0.863h6.596z"></Path>
    </Svg>
  )
}

export default HalfStar
