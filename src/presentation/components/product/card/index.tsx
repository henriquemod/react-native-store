import { Image } from 'expo-image'
import * as React from 'react'
import { TouchableOpacity, type TouchableOpacityProps } from 'react-native'

import { appColors, appSizes, appSpacings } from 'src/presentation/style'
import Button from '../../button'
import { HeartIcon } from '../../icons'
import Box from '../../layout/box'
import Typography from '../../typography'
import {
  Bottom,
  Container,
  Header,
  PriceContainer,
  ProductImageContainer,
  PromotionTag,
} from './style'
import type { Business } from 'src/data/contracts'
import CARD_DIMENSIONS from './dimensions'
import { useAppContext } from 'src/presentation/hooks'

export namespace NProductCard {
  export interface Props {
    product: Business.Product
    touchableOpacityProps?: Partial<TouchableOpacityProps>
    onPress: () => void
    onFavoritePress: () => void
  }
}

const ProductCard = (props: NProductCard.Props) => {
  const { favorite } = useAppContext()
  const isFavorite = !!favorite.findFavorite(props.product)
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={1}
      {...props.touchableOpacityProps}
    >
      <Box
        width={CARD_DIMENSIONS.width}
        height={CARD_DIMENSIONS.height}
        color="lightGray"
        padding={appSpacings.s}
      >
        <Container>
          <Header>
            <PromotionTag>
              <Typography size="xxxs" color="black">
                50% OFF
              </Typography>
            </PromotionTag>
            <Button
              width={appSizes.size.xxs2}
              height={appSizes.size.xxs2}
              onPress={props.onFavoritePress}
              rounded
              color="lightGray"
              padding={appSizes.size.xxxs}
              style={{
                borderWidth: 2,
                borderColor: isFavorite ? appColors.rose : appColors.gray,
              }}
            >
              <HeartIcon
                color={isFavorite ? 'rose' : 'gray'}
                width={appSizes.size.xxs}
                height={appSizes.size.xxs}
              />
            </Button>
          </Header>
          <ProductImageContainer>
            <Image
              source={props.product.image}
              style={{
                width: appSizes.sizeRaw.xxl2,
                height: appSizes.sizeRaw.xxl2,
              }}
            />
          </ProductImageContainer>
          <Bottom>
            <Typography size="xs" color="black" numberOfLines={1}>
              {props.product.title}
            </Typography>
            <PriceContainer>
              <Typography size="xxs" strong color="black">
                U$ {props.product.price.toFixed(2)}
              </Typography>
              <Typography
                size="xxs"
                strong
                color="darkGray"
                style={{
                  textDecorationLine: 'line-through',
                }}
              >
                U$ {(props.product.price * 2).toFixed(2)}
              </Typography>
            </PriceContainer>
          </Bottom>
        </Container>
      </Box>
    </TouchableOpacity>
  )
}

export default React.memo(ProductCard)
