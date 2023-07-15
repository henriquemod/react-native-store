import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import { appSizes, appSpacings } from 'src/presentation/style'
import type { NFavoriteCard } from '.'
import Box from '../../layout/box'
import Typography from '../../typography'

const Actions = (props: NFavoriteCard.Handlers) => {
  return (
    <Box
      style={{
        position: 'absolute',
        bottom: appSpacings.s,
        right: appSpacings.s,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: appSpacings.l,
      }}
      height={appSizes.size.m}
    >
      <TouchableOpacity onPress={props.onRemove}>
        <Typography strong color="rose" size="xs">
          Remove
        </Typography>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onAdd}>
        <Typography strong color="orangeStrong" size="xs">
          Buy now
        </Typography>
      </TouchableOpacity>
    </Box>
  )
}

export default Actions
