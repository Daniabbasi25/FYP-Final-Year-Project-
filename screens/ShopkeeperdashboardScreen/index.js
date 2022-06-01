import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
// import ShopkeeperHeader from '../../components/ShopkeeperHeader';
import styles from './styles';
import RecentOrder from '../../components/RecentOrder';
import Product from '../../components/Product';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShopkeeperBottomTab from '../../components/ShopkeeperBottomTab';
import {Divider} from 'react-native-elements';
// import {Divider} from 'react-native-elements/dist/divider/Divider';

const ShopKeeperdashboardScreen = ({navigation, route}) => {
  console.log('User Id : ' + global.userId);
  // const {d} = route.params;
  return (
    <View style={styles.container}>
      {/* <ShopkeeperHeader /> */}
      {/* <ScrollView> */}
      <View style={styles.header}>
        <Text>Recent Orders</Text>
        <TouchableOpacity>
          <Text style={{color: '#0FAB0A'}}>View All</Text>
        </TouchableOpacity>
      </View>
      <RecentOrder />
      <View style={styles.header}>
        <Text>Uploaded Product</Text>
        <TouchableOpacity>
          <Text
            style={{color: '#0FAB0A'}}
            onPress={() => {
              navigation.navigate('shopkeeperproducts');
            }}>
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <Product />
      {/* </ScrollView> */}
      {/* <Divider width={1} />
       */}
      <Divider width={1} />
      {/* <ShopkeeperBottomTab /> */}
    </View>
  );
};

export default ShopKeeperdashboardScreen;
