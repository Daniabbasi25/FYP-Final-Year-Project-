import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {Card} from 'react-native-elements';
import styles from './styles';
import API from '../../API';
import CartContext from '../../Context/Cart/CartContext';
import Cartitem from '../../components/Cartitem';
const Cart = ({navigation}) => {
  // start
  // global.t=0;
  const [isloading, setloading] = useState(true);
  const [result, productlist] = useState([{}]);
  const [grandtotal,setgrandtotal]=useState(0);
  // let grandtotal=0;
  const t = useContext(CartContext);



const calculatethetotal=(json)=>{
  // calculate the grand total
  // result.
  let i=0;
  json.forEach((item)=>{
     i=item.ttl+i;
    console.log(i)
   
    // grandtotal=item.ttl+grandtotal;
   
  })
  setgrandtotal(i)
}
  const getDataUsingGet = async () => {
    //GET request

    try {
      const apiurl = `http://${API}/API/api/CartItem/Allcart?customerid=${global.userId}`;
      const response = await fetch(apiurl);
      const json = await response.json();
      console.log('hiii' + JSON.stringify(json));
      productlist(json);
      calculatethetotal(json);
    } 
    catch (error) {
      console.error(error);
    } 
    finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getDataUsingGet();
  }, []);
  const Checkoutbutton=()=>{
    if(result.length!=0){
      return(<View style={styles.lowercontainer}>
      <TouchableOpacity
        onPress={() => {
          t.update(1);
          navigation.navigate('CheckOut',{total:grandtotal});
        }}>
        <Text style={styles.checkoutbutton}>checkout Rs={grandtotal}</Text>
      </TouchableOpacity>
    </View>)
    }
    else {
     return( <Text styl={styles.empty}>
        Cart is Empty
      </Text>)
    }
  }
  const Completelist = () => {
    if (!isloading) {
      return (
        <View>
          <View style={styles.flatlistcontainer}>
            <FlatList
              data={result}
              renderItem={({item}) => <Cartitem cartdata={item} />}
            />
          </View>
         <Checkoutbutton />
        </View>
      );
    } else {
      return <ActivityIndicator size="large" color="#00ff00" />;
    }
  };
  // end

  return (
    <View>
      <Completelist />
 
    </View>
  );
};

export default Cart;
