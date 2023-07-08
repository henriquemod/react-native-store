import * as React from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import { spacings } from 'src/presentation/style'
import CategoryCard, { type NCategoryCard } from '../card'

const data: NCategoryCard.Props[] = [
  {
    id: '1',
    active: true,
    icon: "men's clothing",
  },
  {
    id: '2',
    icon: "women's clothing",
  },
  {
    id: '3',
    icon: 'electronics',
  },
  {
    id: '4',
    icon: 'jewelery',
  },
]

const CategoryCarousel = () => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      style={{ width: '100%' }}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View
          style={{
            marginHorizontal: spacings.s,
          }}
        >
          <CategoryCard {...item} />
        </View>
      )}
    />
  )
}

export default CategoryCarousel
