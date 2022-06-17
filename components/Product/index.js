import {
  View,
  Text,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ProductItem from '../ProductItem';
import styles from './styles';
import Products from '../Product/Products';
import API from '../../API';
const Product = () => {
  const [isloading, setloading] = useState(true);
  const [result, productlist] = useState([{}]);

  
   const getDataUsingGet = async () => {
      //GET request
      
      try{   
        const apiurl = `http://${API}/API/api/Product/AllProductsofshopkeeper?shid=${global.userId}`;
    const response= await  fetch(apiurl); 
     const json = await response.json();
  
          console.log("hiii"+JSON.stringify(json))
          productlist(json);
          
  
        }catch (error)
        {console.error(error)}
        finally{
            setloading(false);
        }
      
       
    };
  
  
  useEffect(() => {
    getDataUsingGet()}, []);
  const ProductListview = () => {
    if (!isloading) {
      return (
        <FlatList
          data={result}
          // data={this.state.itemList.slice(0, 2)}
          horizontal={true}
          renderItem={({item}) => <ProductItem productdata={item} />}
          showsHorizontalScrollIndicator={false}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          snapToInterval={Dimensions.get('window').height}
          style={styles.flatList}
        />
      );
    } else {
      return <ActivityIndicator size="large" color="#00ff00" />;
    }
  };
  return (
    <View style={styles.container}>
      {/* <ProductItem 
        product={Products}
      /> */}
      <ProductListview />
    </View>
  );
};

export default Product;
