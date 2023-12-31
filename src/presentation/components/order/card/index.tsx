import { Image } from 'expo-image'
import * as React from 'react'

import type { Business } from 'src/data/contracts'
import hexToRgba from 'src/presentation/helpers/hex-to-rgba'
import { appSizes } from 'src/presentation/style'
import Box from '../../layout/box'
import Typography from '../../typography'
import type { NOrderList } from '../list'
import QuantityHandler from './quantity-handler'
import { Container, ContentContainer } from './style'

export namespace NOrderCard {
  export interface Props {
    order: Business.Order
    schema: NOrderList.ColorSchema
    currentQuantity: number
    increment: () => void
    decrement: () => void
  }
  export type Handlers = Pick<
    Props,
    'increment' | 'decrement' | 'currentQuantity'
  >
}

const OrderCard = (props: NOrderCard.Props) => {
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
        currentQuantity={props.currentQuantity}
        increment={props.increment}
        decrement={props.decrement}
      />
    </Box>
  )
}

export default OrderCard
