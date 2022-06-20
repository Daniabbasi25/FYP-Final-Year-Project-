import { View, Text,Image, TouchableOpacity, TextInput } from 'react-native'
import React,{useState} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import API from '../../API'
const AddtoCart = ({route,navigation}) => {
  console.log("customer id="+ global.userId)
    const {
        product_id, product_price,product_quantity,productimage,imageip,product_name,product_category,product_quantitytype } = route.params;
        console.log("product name="+product_name)
        console.log("product id="+product_id)
       
        // let quantity=0;
        const [quantity,setquantity]=useState(1)
      
       
      const  increment=()=>{
            setquantity(quantity+1)
            console.log(quantity)
        }

      const  decrement=()=>{
        if(quantity>1){
            setquantity(quantity-1)
        }
        else{
            alert("quantity must not be les then 1")
        }
            
            console.log(quantity)
        }
       const  handleaddcart=()=>{
        const data = new FormData();
       
        data.append('pid', product_id);
        data.append('cid', global.userId);
        data.append('quantity', quantity);
        const requestoption = {
            method: 'POST',
            body: data,
        headers: {
          'Content-Type': 'multipart/form-data ',
        },
          };
          fetch(`http://${API}/API/api/CartItem/Addcartitem`, requestoption)
        .then(response => response.json())
        .then(resp => {alert("Item add successfully");
        navigation.navigate("Cart")
        })
        .catch(err => {
                alert(err.message);
              });
       };
  return (
    <View>
        <Image
          source={{uri: imageip + productimage}}
          style={styles.prodcutimg}
        />
        <View style={styles.container}>
            <View style={styles.nameflex}>
            <Text style={styles.productname}>
                {product_name}
            </Text>
            <View style={styles.conterbox}>
                <TouchableOpacity style={styles.button}
                onPress={increment} 
                >
                <Icon name="add-outline" size={25}  color="#fff"/>
                </TouchableOpacity>
                <TextInput keyboardType='numeric' style={{backgroundColor:'#f1f1f1'}} value={quantity.toString()}  onChangeText={text => setquantity(text)}>
                
                </TextInput>
                <TouchableOpacity style={styles.button} onPress={decrement}>
                <Icon name="remove-outline" size={25} color="#fff"/>
                </TouchableOpacity>
            </View>

            </View>
            <View>
            <Text style={styles.productprice}>
                Rs {product_price} /1 {product_quantitytype}
            </Text>
            <TouchableOpacity style={styles.Addtocartbutton} onPress={handleaddcart}>
                <Text style={styles.buttontext}>
                    Add to Cart
                </Text>
                </TouchableOpacity>
        </View>
        </View>
        
    {/* 
        --image
        --name
        -stock
        price
        --plus --mins
        --add to cart button
    
    */}
    </View>
  )
}

export default AddtoCart