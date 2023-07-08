import { Image } from 'expo-image'
import * as React from 'react'
import { Dimensions, View } from 'react-native'

import { type Business } from 'src/data/contracts/business'
import { fixedValues } from 'src/presentation/style'
import Button from '../../button'
import Box from '../../layout/box'
import Typography from '../../typography'
import { Container } from './style'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export namespace NPromotion {
  export type Props = Business.Promotion
}

const Promotion = (props: NPromotion.Props) => {
  return (
    <Box
      color={props.color ?? 'white'}
      width={width - width * 0.33}
      height={height - height * 0.86}
    >
      <Container>
        <View>
          <Typography>{props.title}</Typography>
        </View>
        <Button rounded>
          <Typography color={props.color} strong size="xs" dark>
            {props.btnLabel}
          </Typography>
        </Button>
      </Container>
      <Image
        source={props.imgUrl}
        contentFit="scale-down"
        contentPosition="bottom right"
        style={{
          position: 'absolute',
          zIndex: -1,
          borderBottomRightRadius: fixedValues.borderRadius,
          bottom: 1,
          right: 0,
          flex: 1,
          height: '100%',
          width: '100%',
        }}
      />
    </Box>
  )
}

export default Promotion
