import * as React from 'react'
import { SafeAreaView } from 'react-native'

import type { Business, Navigation } from 'src/data/contracts'
import Button from 'src/presentation/components/button'
import { OrderList } from 'src/presentation/components/order'
import Typography from 'src/presentation/components/typography'
import useAppContext from 'src/presentation/hooks/use-app-context'
import { appSizes } from 'src/presentation/style'
import {
  BackContainer,
  Container,
  HeaderContainer,
  RowContainer,
  TotalValueRow,
} from './style'
import { ArrowBackIcon } from 'src/presentation/components/icons'

export namespace NOrderScreen {
  export interface Props extends Navigation.Props {}
}

const OrderScreen = (props: NOrderScreen.Props) => {
  const { navigation } = props
  const { order } = useAppContext()

  const totalValue = React.useMemo(() => {
    return order.orders.reduce((acc, order) => {
      return acc + order.product.price * order.quantity
    }, 0)
  }, [order.orders])

  const data = React.useMemo(() => {
    return order.orders
  }, [order.orders])

  const handleIncrementOrder = React.useCallback(
    (orderToIncrement: Business.Order) => {
      order.increaseQuantity(orderToIncrement)
    },
    [order],
  )

  const handleDecrementOrder = React.useCallback(
    (orderToDecrement: Business.Order) => {
      order.decreaseQuantity(orderToDecrement)
    },
    [order],
  )

  return (
    <SafeAreaView>
      <Container>
        <HeaderContainer>
          <BackContainer onPress={navigation.goBack}>
            <ArrowBackIcon width={appSizes.size.xs} />
          </BackContainer>
          <Typography strong size="xxl" color="black">
            My cart
          </Typography>
        </HeaderContainer>
        <OrderList
          onIncrement={handleIncrementOrder}
          onDecrement={handleDecrementOrder}
          data={data}
        />
        <RowContainer>
          <TotalValueRow>
            <Typography color="black" strong>
              Total
            </Typography>
            <Typography color="orange" strong>
              R$ {totalValue.toFixed(2)}
            </Typography>
          </TotalValueRow>
          <Button
            color="orangeStrong"
            width="100%"
            height={appSizes.size.xl}
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onPress={() => {}}
          >
            <Typography strong>Buy now</Typography>
          </Button>
        </RowContainer>
      </Container>
    </SafeAreaView>
  )
}

export default OrderScreen
