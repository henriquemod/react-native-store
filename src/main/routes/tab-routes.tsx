import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { Easing } from 'react-native'

import { type Navigation } from 'src/data/contracts'
import {
  FavoritesIcon,
  HomeIcon,
  OrderIcon,
  // ProfileIcon,
} from 'src/presentation/components/icons'
import type { TIconProps } from 'src/presentation/components/icons/men-clothes'
import { appSizes } from 'src/presentation/style'
import {
  makeFavoriteScreen,
  makeHomeScreen,
  makeOrderScreen,
  makeProductScreen,
} from '../factories'

const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()
const ImmersiveRoutes = ['Product', 'Order']

function TabNavigation() {
  const tabBarIconProps = (focused: boolean): TIconProps => ({
    height: appSizes.size.xs,
    width: appSizes.size.xs,
    color: focused ? 'orange' : 'darkGray',
  })

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {
              duration: 300,
              easing: Easing.inOut(Easing.ease),
            },
          },
          close: {
            animation: 'timing',
            config: {
              duration: 300,
              easing: Easing.inOut(Easing.ease),
            },
          },
        },
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabScreens">
        {() => (
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarLabelStyle: {
                display: 'none',
              },
              headerStyle: {
                height: 0,
              },
              headerTitleStyle: {
                display: 'none',
              },
              tabBarIconStyle: {
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
              tabBarStyle: {
                display: ImmersiveRoutes.includes(route.name) ? 'none' : 'flex',
              },
            })}
          >
            <Tab.Screen
              name="Home"
              options={{
                tabBarIcon: props => (
                  <HomeIcon {...tabBarIconProps(props.focused)} />
                ),
              }}
            >
              {a => makeHomeScreen(a as Navigation.Props)}
            </Tab.Screen>
            <Tab.Screen
              name="Favorites"
              options={{
                tabBarIcon: props => (
                  <FavoritesIcon {...tabBarIconProps(props.focused)} />
                ),
              }}
            >
              {a => makeFavoriteScreen(a as Navigation.Props)}
            </Tab.Screen>
            <Tab.Screen
              name="Order"
              options={{
                tabBarIcon: props => (
                  <OrderIcon {...tabBarIconProps(props.focused)} />
                ),
              }}
            >
              {a => makeOrderScreen(a as Navigation.Props)}
            </Tab.Screen>
            {/* <Tab.Screen
              name="Profile"
              options={{
                tabBarIcon: props => (
                  <ProfileIcon {...tabBarIconProps(props.focused)} />
                ),
              }}
            >
              {a => makeHomeScreen(a as Navigation.Props)}
            </Tab.Screen> */}
          </Tab.Navigator>
        )}
      </Stack.Screen>

      <Stack.Screen name="Product">
        {a => makeProductScreen(a as Navigation.Props)}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default TabNavigation
