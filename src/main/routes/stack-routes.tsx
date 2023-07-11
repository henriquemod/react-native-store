import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { makeProductScreen } from '../factories'
import type { Navigation } from 'src/data/contracts'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Product">
        {a => makeProductScreen(a as Navigation.Props)}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default StackNavigation
