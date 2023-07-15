import * as React from 'react'
import { SafeAreaView } from 'react-native'

import type { Business, Navigation } from 'src/data/contracts'
import { FavoriteList } from 'src/presentation/components/favorite'
import { ArrowBackIcon } from 'src/presentation/components/icons'
import Typography from 'src/presentation/components/typography'
import useAppContext from 'src/presentation/hooks/use-app-context'
import { appSizes } from 'src/presentation/style'
import { BackContainer, Container, HeaderContainer } from './style'
import { adaptProductIntoOrderItem } from 'src/presentation/helpers/adapters'

export namespace NOrderScreen {
  export interface Props extends Navigation.Props {}
}

const FavoriteScreen = (props: NOrderScreen.Props) => {
  const { navigation } = props
  const { favorite, order } = useAppContext()

  const favorites = React.useMemo(() => {
    return favorite.favorites
  }, [favorite.favorites])

  const handleRemoveFavorite = React.useCallback(
    (favoriteToRemove: Business.Product) => {
      favorite.removeFavorite(favoriteToRemove)
    },
    [favorite],
  )

  const handleBuyNow = React.useCallback(
    (favoriteToBuy: Business.Product) => {
      const orderToAdd = adaptProductIntoOrderItem(favoriteToBuy)
      order.insertOrder(orderToAdd)
      navigation.navigate('Order')
    },
    [navigation, order],
  )

  return (
    <SafeAreaView>
      <Container>
        <HeaderContainer>
          <BackContainer onPress={navigation.goBack}>
            <ArrowBackIcon width={appSizes.size.xs} />
          </BackContainer>
          <Typography strong size="xxl" color="black">
            Favorites
          </Typography>
        </HeaderContainer>
        <FavoriteList
          onBuyNowPress={handleBuyNow}
          onRemoveFavoritePress={handleRemoveFavorite}
          data={favorites}
        />
      </Container>
    </SafeAreaView>
  )
}

export default FavoriteScreen
