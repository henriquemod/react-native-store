import { NavigationContainer } from '@react-navigation/native'
import * as NavigationBar from 'expo-navigation-bar'
import { setStatusBarHidden } from 'expo-status-bar'
import React from 'react'

import TabNavigation from './routes/tab-routes'

export default function App() {
  React.useEffect(() => {
    const init = async () => {
      setStatusBarHidden(true, 'none')
      Promise.all([
        NavigationBar.setVisibilityAsync('hidden'),
        NavigationBar.setBehaviorAsync('overlay-swipe'),
      ]).catch(error => {
        console.error(error)
      })
    }
    init()
  }, [])

  return (
    <>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </>
  )
}
