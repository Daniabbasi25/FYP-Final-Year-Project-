import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {Card} from 'react-native-shadow-cards';
import API from '../../API';
import Icon from 'react-native-vector-icons/Ionicons';

import * as RootNavigation  from '../../RootNavigation';
const CustomerProductItem = (props) => {
  // const p=props.productdata;
  const {
    product_id,
    product_name,
    product_category,
    productimage,
    product_price,
    product_quantity,  
    product_quantitytype,
    sname,
    prating,
    srating

  } = props.productdata;
  const imageip = `http://${API}/API/`;
  const IconData=()=>{
    if(prating==1){
      return(
        <View  style={{flexDirection:'row'}}>
  <Icon name="star" size={15} color="orange" />
        </View>
      
      )}

      else if(prating==2){
        return(
        <View  style={{flexDirection:'row'}}>
        <Icon name="star" size={15} color="orange" />
        <Icon name="star" size={15} color="orange" />
              </View>)
      }
      else if(prating==3){
        return(
        <View  style={{flexDirection:'row'}}>
        <Icon name="star" size={15} color="orange" />
        <Icon name="star" size={15} color="orange" />
        <Icon name="star" size={15} color="orange" />
              </View>)
      }
      else if(prating==4){
        return(
        <View  style={{flexDirection:'row'}}>
        <Icon name="star" size={15} color="orange" />
        <Icon name="star" size={15} color="orange" />
        <Icon name="star" size={15} color="orange" />
        <Icon name="star" size={15} color="orange" />
              </View>)
      }
      else if(prating==5){
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

  const SHP=()=>{
    if(srating==1){
      return(
        <View  style={{flexDirection:'row'}}>
  <Icon name="star" size={15} color="orange" />
        </View>
      
      )}

      else if(srating==2){
        return(
        <View  style={{flexDirection:'row'}}>
        <Icon name="star" size={15} color="orange" />
        <Icon name="star" size={15} color="orange" />
              </View>)
      }
      else if(srating==3){
        return(
        <View  style={{flexDirection:'row'}}>
        <Icon name="star" size={15} color="orange" />
        <Icon name="star" size={15} color="orange" />
        <Icon name="star" size={15} color="orange" />
              </View>)
      }
      else if(srating==4){
        return(
        <View  style={{flexDirection:'row'}}>
        <Icon name="star" size={15} color="orange" />
        <Icon name="star" size={15} color="orange" />
        <Icon name="star" size={15} color="orange" />
        <Icon name="star" size={15} color="orange" />
              </View>)
      }
      else if(srating==5){
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
          {product_name.toUpperCase()}
        </Text>
       <IconData />
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('UpdateProduct');
            // RootNavigation.navigate('UpdateProduct', { product_id:product_id, product_price:product_price,product_quantity:product_quantity,productimage:productimage,imageip:imageip });
             RootNavigation.navigate('AddtoCart', { product_id:product_id, product_price:product_price,product_quantity:product_quantity,productimage:productimage,imageip:imageip,product_name:product_name,product_category:product_category,product_quantitytype:product_quantitytype });
           
          }}  style={styles.editbutton}>
          <Text style={{color:'#fff',fontSize: 18,}}> <Icon name="cart-outline" size={30}></Icon></Text>
        </TouchableOpacity>
       <Text>{sname.toUpperCase()}</Text>
       <SHP />
      </View>
    </Card>
  );
};

export default CustomerProductItem;
