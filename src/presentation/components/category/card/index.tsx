import * as React from 'react'
import type { TouchableOpacityProps } from 'react-native'

import hexToRgba from 'src/presentation/helpers/hex-to-rgba'
import { appColors, appSizes } from 'src/presentation/style'
import Button from '../../button'
import renderElementBasedOnValue from './get-icon'
import type { Business } from 'src/data/contracts/business'

export namespace NCategoryCard {
  export interface Props extends TouchableOpacityProps {
    id: string
    active?: boolean
    icon: Business.Category
  }
}

const CategoryCard = (props: NCategoryCard.Props) => {
  const Component = renderElementBasedOnValue(props.icon)
  return (
    <Button
      width={appSizes.size.xxl}
      height={appSizes.size.xxl}
      color={props.active ? 'orange' : 'lightGray'}
      style={{
        borderWidth: 1,
        borderColor: hexToRgba(
          props.active ? appColors.orange : appColors.gray,
          0.5,
        ),
      }}
      {...props}
    >
      {Component && (
        <Component
          width={appSizes.size.xs}
          color={props.active ? 'white' : 'darkGray'}
        />
      )}
    </Button>
  )
}

export default React.memo(CategoryCard)
