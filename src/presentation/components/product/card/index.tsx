import { Image } from 'expo-image'
import * as React from 'react'
import {
  Dimensions,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native'

import { colors, sizeRaw, sizes, spacings } from 'src/presentation/style'
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
import type { Business } from 'src/data/contracts/business'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export namespace NProductCard {
  export interface Props {
    product: Business.Product
    touchableOpacityProps?: Partial<TouchableOpacityProps>
  }
}

const ProductCard = (props: NProductCard.Props) => {
  return (
    <TouchableOpacity activeOpacity={1} {...props.touchableOpacityProps}>
      <Box
        width={width - width * 0.55}
        height={height - height * 0.78}
        color="lightGray"
        padding={spacings.s}
      >
        <Container>
          <Header>
            <PromotionTag>
              <Typography size="xxxs" color="black">
                50% OFF
              </Typography>
            </PromotionTag>
            <Button
              width={sizes.xxs2}
              height={sizes.xxs2}
              rounded
              color="lightGray"
              padding={sizes.xxxs}
              style={{
                borderWidth: 2,
                borderColor: colors.gray,
              }}
            >
              <HeartIcon color="gray" width={sizes.xxs} height={sizes.xxs} />
            </Button>
          </Header>
          <ProductImageContainer>
            <Image
              source={props.product.image}
              style={{
                width: sizeRaw.xxl2,
                height: sizeRaw.xxl2,
              }}
            />
          </ProductImageContainer>
          <Bottom>
            <Typography size="xs" color="black">
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

export default ProductCard
