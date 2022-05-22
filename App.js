// import 'react-native-gesture-handler'

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Login from './screens/Login';
import Registration from './screens/Registration';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShopKeeperdashboardScreen from './screens/ShopkeeperdashboardScreen';
import ShopkeeperTab from './screens/ShopkeeperTab';
import Shopkeeperproducts from './screens/shopkeeperproducts';
import RegisterAs from './screens/RegisterAs';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
        //   headerShown: false,
        // }}
        headerMode="screen"
        initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ShopKeeperdashboardScreen"
          component={ShopkeeperTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="shopkeeperproducts"
          component={Shopkeeperproducts}
          screenOptions={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="RegisterAs"
          component={RegisterAs}
          screenOptions={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <ShopKeeperdashboardScreen />
  );
};

export default App;

const styles = StyleSheet.create({});
