import {View, Text, FlatList, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShopkeeperHeader from '../../components/ShopkeeperHeader';
import styles from './styles';
import ProductItem from '../../components/ProductItem';
// import Product from '../../components/Product';
// import ProductItem from '../../components/Product';
import Products from '../../components/Product/Products';
const Shopkeeperproducts = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ShopkeeperHeader />

      <FlatList
        data={Products.slice(0, 20)}
        // data={this.state.itemList.slice(0, 2)}
        horizontal={false}
        renderItem={({item}) => <ProductItem productdata={item} />}
        showsHorizontalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        numColumns={2}
      />
    </View>
  );
};

export default Shopkeeperproducts;
