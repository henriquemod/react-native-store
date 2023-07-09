import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from 'src/presentation/screens/home'
import { sizes } from 'src/presentation/style'
import type { TIconProps } from 'src/presentation/components/icons/men-clothes'
import {
  FavoritesIcon,
  HomeIcon,
  OrderIcon,
  ProfileIcon,
} from 'src/presentation/components/icons'

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
        component={HomeScreen}
        options={{
          tabBarIcon: props => <HomeIcon {...tabBarIconProps(props.focused)} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={HomeScreen}
        options={{
          tabBarIcon: props => (
            <FavoritesIcon {...tabBarIconProps(props.focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={HomeScreen}
        options={{
          tabBarIcon: props => (
            <OrderIcon {...tabBarIconProps(props.focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: props => (
            <ProfileIcon {...tabBarIconProps(props.focused)} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigation
