import * as React from 'react'
import { Skeleton } from '@rneui/themed'

import { appSizes, appColors, appFixedValues } from 'src/presentation/style'

const CategoryCardSkeleton = () => (
  <Skeleton
    skeletonStyle={{
      backgroundColor: appColors.lightGray,
    }}
    style={{
      backgroundColor: appColors.gray,
      width: appSizes.sizeRaw.xxl,
      height: appSizes.sizeRaw.xxl,
      borderRadius: appFixedValues.borderRadius,
    }}
  />
)

export default React.memo(CategoryCardSkeleton)
