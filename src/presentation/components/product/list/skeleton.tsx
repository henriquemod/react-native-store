import * as React from 'react'
import { FlatList } from 'react-native-gesture-handler'

import { appSizes, appSpacings } from 'src/presentation/style'
import ProductCardSkeleton from '../card/skeleton'

const ProductListSkeleton = () => {
  return (
    <FlatList
      data={Array.from({ length: 8 })}
      scrollEnabled
      overScrollMode="always"
      showsVerticalScrollIndicator={false}
      style={{
        marginTop: appSizes.sizeRaw.xs,
      }}
      contentContainerStyle={{
        alignItems: 'center',
        gap: appSpacings.m,
      }}
      numColumns={2}
      renderItem={() => <ProductCardSkeleton />}
    />
  )
}

export default React.memo(ProductListSkeleton)
