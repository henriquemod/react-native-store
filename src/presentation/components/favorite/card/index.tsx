import * as React from 'react'
import Typography from '../../typography'
import type { Business } from 'src/data/contracts'
import Box from '../../layout/box'
import { styled } from 'styled-components/native'
import { Image } from 'expo-image'
import { appSizes } from 'src/presentation/style'
import hexToRgba from 'src/presentation/helpers/hex-to-rgba'
import Actions from './actions'
import type { ColorSchema } from 'src/presentation/helpers/color-generator'

export namespace NFavoriteCard {
  export interface Props {
    favorite: Business.Product
    schema: ColorSchema
    onRemove: () => void
    onAdd: () => void
  }
  export type Handlers = Pick<NFavoriteCard.Props, 'onRemove' | 'onAdd'>
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  gap: ${appSizes.sizeRaw.xxs}px;
`

const ContentContainer = styled.View`
  gap: ${appSizes.sizeRaw.xxs}px;
`

const FavoriteCard = (props: NFavoriteCard.Props) => {
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
            source={{ uri: props.favorite.image }}
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
            {props.favorite.title}
          </Typography>
          <Typography strong size="xs" color="black">
            U$ {props.favorite.price}
          </Typography>
        </ContentContainer>
      </Container>
      <Actions onAdd={props.onAdd} onRemove={props.onRemove} />
    </Box>
  )
}

export default FavoriteCard
