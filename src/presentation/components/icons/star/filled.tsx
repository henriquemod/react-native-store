import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { appColors, appSizes } from 'src/presentation/style'
import type { Colors } from 'src/presentation/style/colors'

export interface TIconProps {
  color?: Colors
  height?: string
  width?: string
}

const FilledStar = (props: TIconProps) => {
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
      <Path d="M30.859 12.545c-0.168-0.506-0.637-0.864-1.189-0.864h-9.535l-2.946-9.067c-0.208-0.459-0.662-0.772-1.188-0.772s-0.981 0.313-1.185 0.764l-0.003 0.008-2.946 9.067h-9.534c-0.69 0-1.25 0.56-1.25 1.25 0 0.414 0.202 0.782 0.512 1.009l0.004 0.002 7.713 5.603-2.946 9.068c-0.039 0.116-0.061 0.249-0.061 0.387 0 0.69 0.56 1.25 1.25 1.25 0.276 0 0.531-0.089 0.738-0.241l-0.004 0.002 7.714-5.605 7.713 5.605c0.203 0.149 0.458 0.238 0.734 0.238 0.691 0 1.251-0.56 1.251-1.251 0-0.138-0.022-0.271-0.064-0.395l0.003 0.009-2.947-9.066 7.715-5.604c0.314-0.231 0.515-0.598 0.515-1.013 0-0.137-0.022-0.27-0.063-0.393l0.003 0.009z"></Path>
    </Svg>
  )
}

export default FilledStar
