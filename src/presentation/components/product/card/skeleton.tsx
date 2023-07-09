import * as React from 'react'
import { Skeleton } from '@rneui/themed'

import { appColors, appFixedValues, appSpacings } from 'src/presentation/style'
import CARD_DIMENSIONS from './dimensions'

const ProductCardSkeleton = () => (
  <Skeleton
    skeletonStyle={{
      backgroundColor: appColors.lightGray,
    }}
    style={{
      marginHorizontal: appSpacings.s,
      backgroundColor: appColors.gray,
      width: CARD_DIMENSIONS.width,
      height: CARD_DIMENSIONS.height,
      borderRadius: appFixedValues.borderRadius,
    }}
  />
)

export default React.memo(ProductCardSkeleton)
