import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import * as Screen from '../screens/index';
import navigationString from './navigationString';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: 'modal',
          animation: 'slide_from_right',
          animationTypeForReplace: 'push',
        }}>
        <Stack.Screen
          name={navigationString.PRACTICES_SCREEN}
          component={Screen.Practices}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationString.HOME_SCREEN}
          component={Screen.Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default MainStack;
