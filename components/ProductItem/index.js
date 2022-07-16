import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {Card} from 'react-native-shadow-cards';
import API from '../../API';
import Icon from 'react-native-vector-icons/Ionicons';

import * as RootNavigation  from '../../RootNavigation';
const ProductItem = (props) => {
  // const p=props.productdata;
  const {
    product_id,
    product_name,
    product_category,
    productimage,
    product_price,
    product_quantity,  
    rating,
  } = props.productdata;
  const imageip = `http://${API}/API/`;
  const IconData=()=>{
    if(rating==1){
      return(
        <View  style={{flexDirection:'row'}}>
  <Icon name="star" size={15} color="orange" />
        </View>
      
      )}

      else if(rating==2){
        return(
        <View  style={{flexDirection:'row'}}>
        <Icon name="star" size={15} color="orange" />
        <Icon name="star" size={15} color="orange" />
              </View>)
      }
      else if(rating==3){
        return(
        <View  style={{flexDirection:'row'}}>
        <Icon name="star" size={15} color="orange" />
        <Icon name="star" size={15} color="orange" />
        <Icon name="star" size={15} color="orange" />
              </View>)
      }
      else if(rating==4){
        return(
        <View  style={{flexDirection:'row'}}>
        <Icon name="star" size={15} color="orange" />
        <Icon name="star" size={15} color="orange" />
        <Icon name="star" size={15} color="orange" />
        <Icon name="star" size={15} color="orange" />
              </View>)
      }
      else if(rating==5){
        return(
        <View style={{flexDirection:'row'}}>
        <Icon name="star" size={15} color="orange" />
        <Icon name="star" size={15} color="orange" />
        <Icon name="star" size={15} color="orange" />
        <Icon name="star" size={15} color="orange" />
        <Icon name="star" size={15} color="orange" />
              </View>)
      }
      else{
        return(
          <Text>Not Rated Yet</Text>
        )
      }
    
  }
  return (
    <Card style={styles.container}>
      <View>
        <Image
          source={{uri: imageip + productimage}}
          style={styles.prodcutimg}
        />
      </View>
      <View style={styles.texdata}>
        <Text style={{fontWeight: '800', fontSize: 20, color: '#000'}}>
          {product_name}
        </Text>
        <IconData />
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('UpdateProduct');
            RootNavigation.navigate('UpdateProduct', { product_id:product_id, product_price:product_price,product_quantity:product_quantity,productimage:productimage,imageip:imageip });
           
          }}  style={styles.editbutton}>
          <Text style={{color:'#fff',fontSize: 18,}}>Edit</Text>
        </TouchableOpacity>
        
      </View>
    </Card>
  );
};

export default ProductItem;
