import * as React from 'react'
import { FlatList } from 'react-native-gesture-handler'

import type { Business } from 'src/data/contracts/business'
import generateColors from 'src/presentation/helpers/color-generator'
import { appSpacings } from 'src/presentation/style'
import OrderCard from '../card'

export namespace NOrderList {
  export interface Props {
    data: Business.Order[]
    onIncrement: (order: Business.Order) => void
    onDecrement: (order: Business.Order) => void
  }
  export interface ColorSchema {
    color: string
    opacity: number
  }
}

const OrderList = (props: NOrderList.Props) => {
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
        const handleIncrement = () => {
          props.onIncrement(item)
        }
        const handleDecrement = () => {
          props.onDecrement(item)
        }

        return (
          <OrderCard
            currentQuantity={item.quantity}
            decrement={handleDecrement}
            increment={handleIncrement}
            schema={colorSchema[index]}
            order={item}
          />
        )
      }}
      keyExtractor={item => item.id.toString()}
    />
  )
}

export default React.memo(OrderList)
