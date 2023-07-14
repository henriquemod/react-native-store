import * as React from 'react'
import Typography from '../../typography'
import type { Business } from 'src/data/contracts'
import Box from '../../layout/box'
import { styled } from 'styled-components/native'
import { Image } from 'expo-image'
import { appSizes } from 'src/presentation/style'
import hexToRgba from 'src/presentation/helpers/hex-to-rgba'
import QuantityHandler from './quantity-handler'
import useAppContext from 'src/presentation/hooks/use-app-context'
import type { NOrderList } from '../list'

export namespace NOrderCard {
  export interface Props {
    order: Business.Order
    schema: NOrderList.ColorSchema
  }
  export interface Handlers {
    currentQuantity: number
    increment: () => void
    decrement: () => void
  }
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  gap: ${appSizes.sizeRaw.xxs}px;
`

const ContentContainer = styled.View`
  gap: ${appSizes.sizeRaw.xxs}px;
`

const OrderCard = (props: NOrderCard.Props) => {
  const { findOrder, increaseQuantity, decreaseQuantity } = useAppContext()
  const order = findOrder(props.order)!
  const handleIncrement = () => {
    increaseQuantity(order)
  }
  const handleDecrement = () => {
    decreaseQuantity(order)
  }
  const handleGetColor = React.useMemo(() => {
    return ''
    // return getColor()
  }, [])
  return (
    <Box color="lightGray">
      <Container>
        <Box
          width={appSizes.sizeRaw.xxl2}
          style={{
            backgroundColor: hexToRgba(
              props.schema.color,
              props.schema.opacity,
            ),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            source={{ uri: props.order.product.image }}
            style={{ width: appSizes.sizeRaw.l, height: appSizes.sizeRaw.l }}
          />
        </Box>
        <ContentContainer>
          <Typography
            size="xs"
            color="black"
            numberOfLines={2}
            style={{ width: appSizes.sizeRaw.xxl2 * 2 }}
          >
            {props.order.product.title}
          </Typography>
          <Typography strong size="xs" color="black">
            U$ {props.order.product.price}
          </Typography>
        </ContentContainer>
      </Container>
      <QuantityHandler
        currentQuantity={order.quantity}
        increment={handleIncrement}
        decrement={handleDecrement}
      />
    </Box>
  )
}

export default OrderCard
