// import 'react-native-gesture-handler'

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Login from './screens/Login';
import Registration from './screens/Registration';
import UpdateProduct from './screens/UpdateProduct';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShopKeeperdashboardScreen from './screens/ShopkeeperdashboardScreen';
import ShopkeeperTab from './screens/ShopkeeperTab';
import Shopkeeperproducts from './screens/shopkeeperproducts';
import RegisterAs from './screens/RegisterAs';
import ProductUpload from './screens/ProductUpload';
import CustomerRegistration from './screens/CustomerRegistration';
import CustomerProduct from './screens/CustomerProduct';
import UserState from './Context/User/UserState';
import { navigationRef } from './RootNavigation';
import CustomerTab from './screens/CustomerTab';
import AddtoCart from './screens/AddtoCart';
import Cart from './screens/Cart';
import CheckOut from './screens/CheckOut';
import CartState from './Context/Cart/CartState';
import SchedulingScreen from './screens/SchedulingScreen';
import OrderScreen from './screens/OrderScreen';
import OrderDetails from './screens/OrderDetails';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <UserState>
      <CartState>
      <NavigationContainer ref={navigationRef}>
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
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CustomerRegister"
            component={CustomerRegistration}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="UpdateProduct"
            component={UpdateProduct}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="CustomerDashboard"
            component={CustomerTab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddtoCart"
            component={AddtoCart}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="CheckOut"
            component={CheckOut}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="Schedule"
            component={SchedulingScreen}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="OrderScreen"
            component={OrderScreen}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="OrderDetail"
            component={OrderDetails}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* // <ShopKeeperdashboardScreen /> */}
      </CartState>
    </UserState>
  );
};

export default App;

const styles = StyleSheet.create({});
