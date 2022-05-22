import {View, Text, FlatList, Dimensions} from 'react-native';
import React from 'react';
import ProductItem from '../ProductItem';
import styles from './styles';
import Products from '../Product/Products';

const Product = () => {
  return (
    <View style={styles.container}>
      {/* <ProductItem 
        product={Products}
      /> */}
      <FlatList
        data={Products.slice(0, 20)}
        // data={this.state.itemList.slice(0, 2)}
        horizontal={true}
        renderItem={({item}) => <ProductItem productdata={item} />}
        showsHorizontalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        style={styles.flatList}
      />
    </View>
  );
};

export default Product;
