import * as React from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import type { Business } from 'src/data/contracts/business'
import { appSpacings } from 'src/presentation/style'
import Promotion from '../card'

const data: Business.Promotion[] = [
  {
    color: 'orange',
    title: '20% OFF DURING THE WEEKEND',
    btnLabel: 'Get Now',
    imgUrl:
      'https://cdn.discordapp.com/attachments/891477812303757314/1127280361848705105/hand-holding-shopping-bags-plain-background_23-2148286215-removebg-preview_122.png',
  },
  {
    color: 'blue',
    title: '20% OFF DURING THE WEEKEND',
    btnLabel: 'Get Now',
    imgUrl:
      'https://cdn.discordapp.com/attachments/891477812303757314/1127280361848705105/hand-holding-shopping-bags-plain-background_23-2148286215-removebg-preview_122.png',
  },
  {
    color: 'orange',
    title: '20% OFF DURING THE WEEKEND',
    btnLabel: 'Get Now',
    imgUrl:
      'https://cdn.discordapp.com/attachments/891477812303757314/1127280361848705105/hand-holding-shopping-bags-plain-background_23-2148286215-removebg-preview_122.png',
  },
  {
    color: 'blue',
    title: '20% OFF DURING THE WEEKEND',
    btnLabel: 'Get Now',
    imgUrl:
      'https://cdn.discordapp.com/attachments/891477812303757314/1127280361848705105/hand-holding-shopping-bags-plain-background_23-2148286215-removebg-preview_122.png',
  },
]

const PromotionCarousel = () => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      style={{ width: '100%' }}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <View
          style={{
            marginHorizontal: appSpacings.s,
          }}
        >
          <Promotion {...item} />
        </View>
      )}
    />
  )
}

export default PromotionCarousel
