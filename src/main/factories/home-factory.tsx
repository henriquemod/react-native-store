import * as React from 'react'
import HomeScreen from 'screens/home'
import { makeAxiosHttpClient } from './axios-factory'
import makeExpoStorage from './expo-storage-factory'

export const makeHomeScreen: React.FC = (): JSX.Element => {
  const axiosClient = makeAxiosHttpClient()
  const expoStorage = makeExpoStorage()
  return <HomeScreen httpClient={axiosClient} storage={expoStorage} />
}
