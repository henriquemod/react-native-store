import * as React from 'react'
import { makeAxiosHttpClient } from './axios-factory'
// import makeExpoStorage from './expo-storage-factory'
import type { Navigation } from 'src/data/contracts'
import { ProductScreen } from 'src/presentation/screens'

export const makeProductScreen: React.FC<Navigation.Props> = (
  navigationSystem: Navigation.Props,
): JSX.Element => {
  const axiosClient = makeAxiosHttpClient()
  // const expoStorage = makeExpoStorage()
  return (
    <ProductScreen
      httpClient={axiosClient}
      // storage={expoStorage}
      {...navigationSystem}
    />
  )
}
