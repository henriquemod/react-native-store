import React from 'react'
import Svg, { Path, G, Polygon } from 'react-native-svg'
import { appColors, appSizes } from 'src/presentation/style'
import type { Colors } from 'src/presentation/style/colors'

export interface TIconProps {
  color?: Colors
  height?: string
  width?: string
}

const Jewel = (props: TIconProps) => {
  const {
    color = 'black',
    height = appSizes.size.s,
    width = appSizes.size.s,
  } = props
  return (
    <Svg width={width} height={height} viewBox="0 0 64 64">
      <G
        id="64px-Glyph"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <G id="gen-jewel" fill={appColors[color]}>
          <Path
            d="M31.0596,57.3398 L18.2976,21.9998 L4.4996,21.9998 L31.2006,57.5998 C31.2016,57.6018 31.2026,57.6018 31.2026,57.6028 C31.1436,57.5238 31.0946,57.4358 31.0596,57.3398"
            id="Fill-125"
          ></Path>
          <Polygon
            id="Fill-127"
            points="43.5762 22 20.4242 22 32.0002 54.056"
          ></Polygon>
          <Path
            d="M45.7021,22 L32.9401,57.34 C32.9051,57.436 32.8561,57.524 32.7971,57.603 C32.7971,57.602 32.7991,57.602 32.8001,57.6 L59.5001,22 L45.7021,22 Z"
            id="Fill-129"
          ></Path>
          <Path
            d="M31.2676,6.3193 C31.6446,5.9123 32.3556,5.9123 32.7326,6.3193 L43.9996,18.4533 L43.9996,6.0003 L19.9996,6.0003 L19.9996,18.4533 L31.2676,6.3193 Z"
            id="Fill-131"
          ></Path>
          <Polygon id="Fill-133" points="21.293 20 42.707 20 32 8.47"></Polygon>
          <Polygon
            id="Fill-135"
            points="46 6.5859 46 19.9999 59.414 19.9999"
          ></Polygon>
          <Polygon
            id="Fill-137"
            points="18 6.5859 4.586 19.9999 18 19.9999"
          ></Polygon>
        </G>
      </G>
    </Svg>
  )
}

export default Jewel
