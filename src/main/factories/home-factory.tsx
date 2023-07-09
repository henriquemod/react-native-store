import * as React from 'react'
import HomeScreen from 'screens/home'
import { makeAxiosHttpClient } from './axios-factory'
import makeExpoStorage from './expo-storage-factory'
import type { Navigation } from 'src/data/contracts'

export const makeHomeScreen: React.FC<Navigation.Props> = (
  navigationSystem: Navigation.Props,
): JSX.Element => {
  const axiosClient = makeAxiosHttpClient()
  const expoStorage = makeExpoStorage()
  return (
    <HomeScreen
      httpClient={axiosClient}
      storage={expoStorage}
      {...navigationSystem}
    />
  )
}
