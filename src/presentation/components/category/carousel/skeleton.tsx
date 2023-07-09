import * as React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import CategoryCardSkeleton from '../card/skeleton'
import { View } from 'react-native'
import { appSpacings } from 'src/presentation/style'

const CategoryCarouselSkeleton = () => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={Array.from({ length: 4 })}
      style={{ width: '100%' }}
      renderItem={() => (
        <View
          style={{
            marginHorizontal: appSpacings.s,
          }}
        >
          <CategoryCardSkeleton />
        </View>
      )}
    />
  )
}

export default React.memo(CategoryCarouselSkeleton)
