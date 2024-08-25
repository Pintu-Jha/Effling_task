import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { navigationRef } from '../NavigationServies';
import MainStack from './MainStack';

const AppStack = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer ref={navigationRef} >
         <MainStack /> 
      </NavigationContainer>
    </View>
  );
};

export default AppStack;
