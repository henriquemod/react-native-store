import * as React from 'react'
import { FavoriteScreen } from 'screens'
import type { Navigation } from 'src/data/contracts'

export const makeFavoriteScreen: React.FC<Navigation.Props> = (
  navigationSystem: Navigation.Props,
): JSX.Element => {
  return <FavoriteScreen {...navigationSystem} />
}
