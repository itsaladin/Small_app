import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Add } from '../screen/add';
import { Login } from '../screen/auth/login';
import { SignUp } from '../screen/auth/signup';
import { Home } from '../screen/home';

const Drawer = createDrawerNavigator();

export const Root =() => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Sign Up" component={SignUp} />
        <Drawer.Screen name="Create" component={Add} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}