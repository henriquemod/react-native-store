import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import * as NavigationBar from 'expo-navigation-bar'
import TabNavigation from './routes/tab-routes'

export default function App() {
  React.useEffect(() => {
    const init = async () => {
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
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  )
}
