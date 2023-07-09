import * as React from 'react'
import { FlatList } from 'react-native-gesture-handler'

import { type Business } from 'src/data/contracts/business'
import ProductCard from '../card'
import { appSizes, appSpacings } from 'src/presentation/style'

export namespace NProductList {
  export interface Props {
    data: Business.Product[]
  }
}

const ProductList = (props: NProductList.Props) => {
  return (
    <FlatList
      data={props.data}
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
      renderItem={({ item }) => {
        return (
          <ProductCard
            product={item}
            touchableOpacityProps={{
              style: {
                marginHorizontal: appSpacings.s,
              },
            }}
          />
        )
      }}
      keyExtractor={item => item.id.toString()}
    />
  )
}

export default React.memo(ProductList)
