import * as React from 'react'
import { FlatList } from 'react-native-gesture-handler'

import { type Business } from 'src/data/contracts/business'
import ProductCard from '../card'
import { sizeRaw, spacings } from 'src/presentation/style'
import { Dimensions } from 'react-native'

export namespace NProductList {
  export interface Props {
    data: Business.Product[]
  }
}

const ProductList = (props: NProductList.Props) => {
  console.log(props.data.length)
  return (
    <FlatList
      initialNumToRender={props.data.length}
      data={props.data}
      scrollEnabled
      overScrollMode="always"
      showsVerticalScrollIndicator={false}
      style={{
        marginTop: sizeRaw.xs,
      }}
      contentContainerStyle={{
        alignItems: 'center',
        gap: spacings.m,
      }}
      numColumns={2}
      renderItem={({ item }) => {
        return (
          <ProductCard
            product={item}
            touchableOpacityProps={{
              style: {
                marginHorizontal: spacings.s,
              },
            }}
          />
        )
      }}
      keyExtractor={item => item.id.toString()}
    />
  )
}

export default ProductList
