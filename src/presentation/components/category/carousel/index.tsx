import * as React from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import { type Business } from 'src/data/contracts/business'
import { appSpacings } from 'src/presentation/style'
import CategoryCard from '../card'

export namespace NCategoryCarousel {
  export interface Props {
    selectedCategory?: Business.Category
    categories: Business.Category[]
    handleSelectCategory: (category: Business.Category) => void
  }
}

const CategoryCarousel = (props: NCategoryCarousel.Props) => {
  const data = props.categories.map((category, i) => ({
    id: i.toString(),
    icon: category,
    active: props.selectedCategory === category,
  }))
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      style={{ width: '100%' }}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        const handleSelectCategory = () => {
          props.handleSelectCategory(item.icon)
        }
        return (
          <View
            style={{
              marginHorizontal: appSpacings.s,
            }}
          >
            <CategoryCard onPress={handleSelectCategory} {...item} />
          </View>
        )
      }}
    />
  )
}

export default React.memo(CategoryCarousel)
