import { View, Text,Image,TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Card  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CartContext from '../../Context/Cart/CartContext';
import API from '../../API';
import styles from './styles';
// global.datattl=0;
const Cartitem=(props)=>{
    const t=useContext(CartContext)
    const {name,price,quantity,type,ttl,productimage}=props.cartdata;
    const {handledelet}=props.handledelet;
    
    // console.log("ttl="+ttl)
    // datattl=datattl+ttl;
    // global.datattl=ttl+ttl
    // console.log(`datatotal${global.datattl}`)
    // t.update(ttl);
    const deletefunction=()=>{
    console.log(props.cartdata)
    }
    const imageip = `http://${API}/API/Images/`;
    return(
        <Card >
            <View style={styles.maincontainer}> 
            <Image
      source={{uri: imageip + productimage}}
      style={styles.prodcutimg}
    />
            <View style={styles.pronamecontainer}>
                <Text style={styles.proname}>
                    {name}
                </Text>
                <Text style={styles.proname}>
                    Quantity={quantity}
                </Text>
                <Text style={styles.priceperkg}>
                    Rs {price} 1/{type}
                </Text>

            </View>
            <View style={styles.iconcontainer}>
           
            <TouchableOpacity onPress={()=>props.handledelet(props.cartdata)}>
            <Icon name="delete" size={25} color="red"/>
            </TouchableOpacity>
            <Text style={styles.itemtotal}>
                    Rs {ttl} 
                </Text>
            </View>
            </View>
        </Card>

    )
    
};

export default Cartitem