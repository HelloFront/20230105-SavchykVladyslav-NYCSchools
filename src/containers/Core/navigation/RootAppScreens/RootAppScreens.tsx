import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AppScreens } from '../screens';
import { styleOptions } from './styles';

const Stack = createStackNavigator();

const RootAppScreens = () => {
  return (
    <Stack.Navigator>
      {AppScreens.map(screen => (
        <Stack.Screen
          options={styleOptions()}
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default RootAppScreens;
