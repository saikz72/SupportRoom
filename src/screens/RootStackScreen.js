import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import GetStartedScreen from './GetStartedScreen';
import SignUpScreen from './SignupScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="screen">
    <RootStack.Screen name="GetStartedScreen" component={GetStartedScreen} />
    <RootStack.Screen name="SignupScreen" component={SignUpScreen} />
    <RootStack.Screen name="LoginScreen" component={LoginScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
