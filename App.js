import React from 'react';

import { TabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationCont } from '@react-navigation/native';

// import screens
import Home from './src/screens/home'
import Profile from './src/screens/profile'
import Settings from './src/screens/settings'

// import colors from theme
import * as theme from './src/constants/theme'

import Icon from 'react-native-vector-icons/MaterialIcons'

const Tab = TabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: theme.colors.light.foreground,
        inactiveTintColor: theme.colors.silver
      }}>
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={35} />
            ),
          }} />

        <Tab.Screen 
          name="Profile" 
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <Icon name="person" color={color} size={35} />
            ),
          }} />

        <Tab.Screen 
          name="Settings" 
          component={Settings}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <Icon name="settings" color={color} size={35} />
            ),
          }} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationCont>
      <MyTabs />
    </NavigationCont>
  );
}

export default App;
