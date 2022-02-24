import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';
import { ScreenStackHeaderSearchBarView } from 'react-native-screens';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation =() => {
  return (
    <Stack.Navigator
      
      screenOptions={
        {
          headerStyle:{
            elevation: 0,
            shadowColor: 'transparent'
            

          },
          cardStyle:{
            // backgroundColor: 'white'
          }
        }
        
      }    
    >
      <Stack.Screen name="HomeScreen" options={{headerShown: false}} component={HomeScreen} />
      <Stack.Screen name="DetailScreen" options={{headerShown: false}} component={DetailScreen} />      
    </Stack.Navigator>
  );
}