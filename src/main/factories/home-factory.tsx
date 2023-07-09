import * as React from 'react'
import HomeScreen from 'src/presentation/screens/home'
import { makeAxiosHttpClient } from './axios-factory'

export const makeHomeScreen: React.FC = (): JSX.Element => {
  const axiosClient = makeAxiosHttpClient()
  return <HomeScreen axiosClient={axiosClient} />
}
