import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './src/navigators/TabNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Budget" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Tab' component={TabNavigator} options={
          {
            animation: 'slide_from_bottom'
          }
        } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

