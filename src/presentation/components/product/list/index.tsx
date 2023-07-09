import * as React from 'react'
import { FlatList } from 'react-native-gesture-handler'

import { type Business } from 'src/data/contracts/business'
import ProductCard from '../card'
import { sizeRaw, spacings } from 'src/presentation/style'
import { Dimensions } from 'react-native'

const data: Business.Product[] = [
  {
    id: '1',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    name: 'iPhone 14',
    price: 3500,
  },
  {
    id: '2',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    name: 'iPhone 14',
    price: 3500,
  },
  {
    id: '3',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    name: 'iPhone 14',
    price: 3500,
  },
  {
    id: '4',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    name: 'iPhone 14',
    price: 3500,
  },
  {
    id: '5',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    name: 'iPhone 14',
    price: 3500,
  },
  {
    id: '6',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    name: 'iPhone 14',
    price: 3500,
  },
]

const ProductList = () => {
  return (
    <FlatList
      data={data}
      scrollEnabled
      overScrollMode="always"
      showsVerticalScrollIndicator={false}
      style={{
        marginTop: sizeRaw.xs,
      }}
      contentContainerStyle={{
        alignItems: 'center',
        gap: spacings.m,
        height: Dimensions.get('window').height - sizeRaw.xxl,
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
      keyExtractor={item => item.id}
    />
  )
}

export default ProductList
