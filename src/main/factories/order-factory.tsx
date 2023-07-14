import * as React from 'react'
import { OrderScreen } from 'screens'
import type { Navigation } from 'src/data/contracts'

export const makeOrderScreen: React.FC<Navigation.Props> = (
  navigationSystem: Navigation.Props,
): JSX.Element => {
  return <OrderScreen {...navigationSystem} />
}
