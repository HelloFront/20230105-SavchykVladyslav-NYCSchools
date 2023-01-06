import React from 'react';

import { RootAppScreens } from './RootAppScreens';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootAppScreens />
    </NavigationContainer>
  );
};

export default Navigation;
