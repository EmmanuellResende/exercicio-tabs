import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Users from '../screens/Users/Users';
import Posts from '../screens/Posts/Posts';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Posts">
        <Tab.Screen
          name="Usuários"
          component={Users}
          options={{
            tabBarLabel: 'USERS',
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="arrow-back-circle-outline" size={50} color={ '#ff0000' } />;
            },
          }}
        />
        <Tab.Screen
          name="Posts"
          component={Posts}
          options={{
            tabBarLabel: 'POSTS',
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="arrow-forward-circle-outline" size={50} color={ '#ff0000' } />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
