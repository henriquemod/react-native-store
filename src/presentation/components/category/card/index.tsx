import * as React from 'react'
import { type ViewProps } from 'react-native'

import hexToRgba from 'src/presentation/helpers/hex-to-rgba'
import { colors, sizes } from 'src/presentation/style'
import Button from '../../button'
import renderElementBasedOnValue, { type IconItem } from './get-icon'

export namespace NCategoryCard {
  export interface Props extends ViewProps {
    id: string
    active?: boolean
    icon: IconItem
  }
}

const CategoryCard = (props: NCategoryCard.Props) => {
  const Component = renderElementBasedOnValue(props.icon)
  return (
    <Button
      width={sizes.xxl}
      height={sizes.xxl}
      color={props.active ? 'orange' : 'lightGray'}
      style={{
        borderWidth: 1,
        borderColor: hexToRgba(props.active ? colors.orange : colors.gray, 0.5),
      }}
      {...props}
    >
      {Component && (
        <Component
          width={sizes.xs}
          color={props.active ? 'white' : 'darkGray'}
        />
      )}
    </Button>
  )
}

export default CategoryCard
