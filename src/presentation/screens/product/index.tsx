import { Image } from 'expo-image'
import * as React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Score from 'components/score'
import Typography from 'components/typography'
import type { Business, Http, Navigation } from 'src/data/contracts'
import hexToRgba from 'src/presentation/helpers/hex-to-rgba'
import { appColors, appSizes, appSpacings } from 'src/presentation/style'
import type { Colors } from 'src/presentation/style/colors'
import { Container, ImageContainer, Oval } from './style'

interface RouteParams {
  product: Business.Product
}

export namespace NProductScreen {
  export interface Props extends Navigation.Props<RouteParams> {
    httpClient: Http.Client
  }
}

const ProductScreen = (props: NProductScreen.Props) => {
  const { route } = props
  const prod = route.params.product
  return (
    <SafeAreaView>
      <Container>
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
        <View>
          <Typography color={hexToRgba(appColors.black, 0.75) as Colors} strong>
            {prod.title}
          </Typography>
          <Score score={prod.rating.rate} />
        </View>
      </Container>
    </SafeAreaView>
  )
}

export default ProductScreen
