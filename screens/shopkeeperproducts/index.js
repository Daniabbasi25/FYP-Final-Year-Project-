import {
  View,
  Text,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import ShopkeeperHeader from '../../components/ShopkeeperHeader';
import styles from './styles';
import ProductItem from '../../components/ProductItem';
// import Product from '../../components/Product';
// import ProductItem from '../../components/Product';
import API from '../../API';
import Icon from 'react-native-vector-icons/Ionicons';

const Shopkeeperproducts = ({navigation}) => {
  const [isloading, setloading] = useState(true);
  const [result, productlist] = useState([]);

  const getDataUsingGet = async () => {
    //GET request
 
    try{ 
      const apiurl = `http://${API}/API/api/Product/AllProductsofshopkeeper?shid=${global.userId}`;
 
      console.log(apiurl)
  
  const response= await  fetch(apiurl); 
   const json = await response.json();

        console.log("hiii"+JSON.stringify(json))
        productlist(json);
        console.log("data==="+JSON.stringify(result))

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
           //data={result.slice(0, 2)}
          horizontal={false}
          renderItem={({item}) => <ProductItem productdata={item} />}
          showsHorizontalScrollIndicator={false}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          snapToInterval={Dimensions.get('window').height}
          numColumns={2}
        />
      );
    } else {
      return <ActivityIndicator size="large" color="#00ff00" />;
    }
  };
  return (
    <View style={styles.container}>
      {/* <ShopkeeperHeader /> */}
      <ProductListview />
    </View>
  );
};

export default Shopkeeperproducts;
