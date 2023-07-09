import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { colors, sizes } from 'src/presentation/style'
import type { Colors } from 'src/presentation/style/colors'

export interface TIconProps {
  color?: Colors
  height?: string
  width?: string
}

const Heart = (props: TIconProps) => {
  const { color = 'black', height = sizes.s, width = sizes.s } = props
  return (
    <Svg width={width} height={height} viewBox="0 0 12 10" fill="none">
      <Path
        d="M10.8652 1.12969C10.5977 0.862026 10.28 0.649695 9.9304 0.504829C9.58078 0.359963 9.20604 0.2854 8.8276 0.2854C8.44915 0.2854 8.07441 0.359963 7.72479 0.504829C7.37517 0.649695 7.05752 0.862026 6.78998 1.12969L6.23474 1.68493L5.6795 1.12969C5.13909 0.58928 4.40614 0.285681 3.64188 0.285681C2.87763 0.285681 2.14467 0.58928 1.60426 1.12969C1.06385 1.6701 0.760254 2.40305 0.760254 3.16731C0.760254 3.93156 1.06385 4.66452 1.60426 5.20493L2.1595 5.76017L6.23474 9.8354L10.31 5.76017L10.8652 5.20493C11.1329 4.93739 11.3452 4.61974 11.4901 4.27011C11.6349 3.92049 11.7095 3.54575 11.7095 3.16731C11.7095 2.78886 11.6349 2.41413 11.4901 2.0645C11.3452 1.71488 11.1329 1.39723 10.8652 1.12969Z"
        fill={colors[color]}
      />
    </Svg>
  )
}

export default Heart
