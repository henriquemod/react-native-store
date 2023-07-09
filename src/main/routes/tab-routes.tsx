import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { sizes } from 'src/presentation/style'
import type { TIconProps } from 'src/presentation/components/icons/men-clothes'
import {
  FavoritesIcon,
  HomeIcon,
  OrderIcon,
  ProfileIcon,
} from 'src/presentation/components/icons'
import { makeHomeScreen } from '../factories/home-factory'

const Tab = createBottomTabNavigator()

function TabNavigation() {
  const tabBarIconProps = (focused: boolean): TIconProps => ({
    height: sizes.xs,
    width: sizes.xs,
    color: focused ? 'orange' : 'darkGray',
  })
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
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
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: props => <HomeIcon {...tabBarIconProps(props.focused)} />,
        }}
      >
        {a => makeHomeScreen(a)}
      </Tab.Screen>
      <Tab.Screen
        name="Favorites"
        options={{
          tabBarIcon: props => (
            <FavoritesIcon {...tabBarIconProps(props.focused)} />
          ),
        }}
      >
        {a => makeHomeScreen(a)}
      </Tab.Screen>
      <Tab.Screen
        name="Orders"
        options={{
          tabBarIcon: props => (
            <OrderIcon {...tabBarIconProps(props.focused)} />
          ),
        }}
      >
        {a => makeHomeScreen(a)}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: props => (
            <ProfileIcon {...tabBarIconProps(props.focused)} />
          ),
        }}
      >
        {a => makeHomeScreen(a)}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default TabNavigation
