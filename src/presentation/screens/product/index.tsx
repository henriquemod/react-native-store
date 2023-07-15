import { Image } from 'expo-image'
import * as React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import Score from 'components/score'
import Typography from 'components/typography'
import type { Business, Http, Navigation } from 'src/data/contracts'
import Button from 'src/presentation/components/button'
import { ArrowBackIcon } from 'src/presentation/components/icons'
import hexToRgba from 'src/presentation/helpers/hex-to-rgba'
import { appColors, appSizes, appSpacings } from 'src/presentation/style'
import type { Colors } from 'src/presentation/style/colors'
import {
  AboutContainer,
  BackContainer,
  BottomContainer,
  Container,
  Header,
  ImageContainer,
  Oval,
  PriceContainer,
  PriceRow,
} from './style'
import useAppContext from 'src/presentation/hooks/use-app-context'
import { adaptProductIntoOrderItem } from 'src/presentation/helpers/adapters'

interface RouteParams {
  product: Business.Product
}

export namespace NProductScreen {
  export interface Props extends Navigation.Props<RouteParams> {
    httpClient: Http.Client
  }
}

const ProductScreen = (props: NProductScreen.Props) => {
  const { route, navigation } = props
  const { order } = useAppContext()
  const handleAddToCart = () => {
    const orderItem = adaptProductIntoOrderItem(route.params.product)
    order.insertOrder(orderItem)
    navigation.navigate('Order')
  }

  const prod = route.params.product
  return (
    <SafeAreaView>
      <Container>
        <BackContainer onPress={navigation.goBack}>
          <ArrowBackIcon width={appSizes.size.xs} />
        </BackContainer>
        <Oval />
        <ImageContainer>
          <Image
            source={{ uri: prod.image }}
            style={{
              height: appSizes.sizeRaw.xxl2 * 2,
              width: appSizes.sizeRaw.xxl2 * 2,
              marginTop: appSpacings.xxl2,
            }}
          />
        </ImageContainer>
        <BottomContainer>
          <Header>
            <Typography
              size="xl"
              color={hexToRgba(appColors.black, 0.75) as Colors}
              strong
            >
              {prod.title}
            </Typography>
            <Score score={prod.rating.rate} />
          </Header>
          <PriceRow>
            <PriceContainer>
              <Typography size="l" strong color="black">
                U$ {prod.price.toFixed(2)}
              </Typography>
              <Typography
                size="xs"
                strong
                color="darkGray"
                style={{
                  textDecorationLine: 'line-through',
                }}
              >
                U$ {(prod.price * 2).toFixed(2)}
              </Typography>
            </PriceContainer>
            <Typography strong color="black">
              Available in stock
            </Typography>
          </PriceRow>
          <AboutContainer>
            <Typography strong color="black">
              About
            </Typography>
            <Typography color="darkGray">{prod.description}</Typography>
          </AboutContainer>
          <Button
            color="orangeStrong"
            width="100%"
            height={appSizes.size.xl}
            onPress={handleAddToCart}
          >
            <Typography strong>Add to cart</Typography>
          </Button>
        </BottomContainer>
      </Container>
    </SafeAreaView>
  )
}

export default ProductScreen
