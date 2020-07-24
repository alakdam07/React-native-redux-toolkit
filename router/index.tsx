import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/home/index'
import Post from '../screen/cats/index'
import Todo from '../screen/todo/index'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Stack = createBottomTabNavigator<any>();
export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animationEnabled: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="Todo" component={Todo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
