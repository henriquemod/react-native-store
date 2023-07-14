import * as React from 'react'
import { appColors, appSizes, appSpacings } from 'src/presentation/style'
import styled from 'styled-components/native'
import Box from '../../layout/box'
import Typography from '../../typography'
import type { NOrderCard } from '.'
import Button from '../../button'
import { TouchableOpacity } from 'react-native'

const Container = styled.View`
  display: flex;
  flex-direction: row;
  gap: ${appSizes.sizeRaw.xxs}px;
`

const QuantityHandler = (props: NOrderCard.Handlers) => {
  return (
    <Box
      style={{
        borderWidth: 1,
        borderColor: appColors.orange,
        position: 'absolute',
        bottom: appSpacings.s,
        right: appSpacings.m,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: appSpacings.m,
      }}
      width={appSizes.size.xxl2}
      height={appSizes.size.m}
    >
      <TouchableOpacity onPress={props.decrement}>
        <Typography
          strong
          style={{
            height: appSizes.sizeRaw.xxs2,
          }}
          color="orange"
          size="s"
        >
          -
        </Typography>
      </TouchableOpacity>
      <Typography
        style={{ height: appSizes.sizeRaw.xxs2 }}
        color="black"
        size="xs"
      >
        {props.currentQuantity}
      </Typography>
      <TouchableOpacity
        onPress={() => {
          props.increment()
        }}
      >
        <Typography
          strong
          style={{ height: appSizes.sizeRaw.xxs2 }}
          color="orange"
          size="s"
        >
          +
        </Typography>
      </TouchableOpacity>
    </Box>
  )
}

export default QuantityHandler
