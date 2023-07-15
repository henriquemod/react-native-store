import * as React from 'react'
import { FlatList } from 'react-native-gesture-handler'

import type { Business } from 'src/data/contracts/business'
import { appSpacings } from 'src/presentation/style'
import FavoriteCard from '../card'
import generateColors from 'src/presentation/helpers/color-generator'

export namespace NFavoriteList {
  export interface Props {
    data: Business.Product[]
    onBuyNowPress: (product: Business.Product) => void
    onRemoveFavoritePress: (product: Business.Product) => void
  }
}

const FavoriteList = (props: NFavoriteList.Props) => {
  const listSize = props.data.length

  const colorSchema = React.useMemo(() => {
    return generateColors(listSize)
  }, [listSize])

  return (
    <FlatList
      data={props.data}
      scrollEnabled
      overScrollMode="always"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        gap: appSpacings.l,
      }}
      style={{
        width: '100%',
      }}
      renderItem={({ item, index }) => {
        const handleBuyNowPress = () => {
          props.onBuyNowPress(item)
        }

        const handleRemoveFavoritePress = () => {
          props.onRemoveFavoritePress(item)
        }

        return (
          <FavoriteCard
            onAdd={handleBuyNowPress}
            onRemove={handleRemoveFavoritePress}
            schema={colorSchema[index]}
            favorite={item}
          />
        )
      }}
      keyExtractor={item => item.id.toString()}
    />
  )
}

export default React.memo(FavoriteList)
