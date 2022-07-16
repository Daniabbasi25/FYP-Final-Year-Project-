import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ShopKeeperdashboardScreen from '../ShopkeeperdashboardScreen';
import Registration from '../Registration';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductUpload from '../ProductUpload';
import ShopkeeperHeader from '../../components/ShopkeeperHeader';
import ShopkeeperProfileScreen from '../ShopkeeperProfileScreen';
import CustomerProduct from '../CustomerProduct';
import Cart from '../Cart';
import DeliveryBoyDashboard from '../DeliveryDashboard';

// const myIcon = <Icon name="shop" size={30} />;
const Tab = createBottomTabNavigator();
const DeliveryTab = ({route, navigation}) => {
  console.log('reoutes', route.params);
//   const id = JSON.stringify(shopkeeperid);
  return (
    // <UserContext>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart-outline' : 'cart-outline';
          } else if (route.name === 'shopkeeperprofile') {
            iconName = focused ? 'person-outline' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
        // headerShown: false,
        header: () => <ShopkeeperHeader  />,
      })}>
      <Tab.Screen name="Home" component={DeliveryBoyDashboard} />
     

    
    </Tab.Navigator>
    // </UserContext>
  );
};

export default DeliveryTab;
