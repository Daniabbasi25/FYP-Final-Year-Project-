import { View, Text,TouchableOpacity,Image } from 'react-native';
import React from 'react';
import styles from './styles';
import {Card} from 'react-native-shadow-cards';
const ProductItem = props => {
  // const p=props.productdata;
  const { product_id,product_name,product_category,product_image,product_price,product_quanity,dozen,kg} =props.productdata;

  return (
    <Card style={styles.container}>
      <View >
          <Image 
          source={product_image}
          style={styles.prodcutimg}
          />
      </View>
      <View style={styles.texdata}>
          <Text style={{fontWeight:'800',fontSize:20,color:'#000'}}>
              {product_name}
          </Text>
          <TouchableOpacity>
              <Text>
                  Edit
              </Text>
          </TouchableOpacity>
      </View>
    </Card>
  )
}

export default ProductItem