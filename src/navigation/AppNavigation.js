import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from '../screens/MainScreen';
import { FullSizePhoto } from '../screens/FullSizePhoto';

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home Page' component={MainScreen} />
        <Stack.Screen name='Image' component={FullSizePhoto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
