import { View, Text,ActivityIndicator,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import API from '../../API';
import CustomerOrderItem from '../../components/CustomerOrderItem';
import styles from './styles';
const CustomerOrders = () => {
  const [isloading, setloading] = useState(true);
  const [result, productlist] = useState([{}]);
  const getDataUsingGet = async () => {
    //GET request

    try {
      const apiurl = `http://${API}/API/api/Order/getcusorders?cid=${global.userId}`;
      const response = await fetch(apiurl);
      const json = await response.json();
      console.log('hiii' + JSON.stringify(json));
      productlist(json);
     
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    getDataUsingGet();
  }, []);
  const handledelet = results => {
    fetch(
      `http://${API}/API/api/CartItem/Deletecart?id=${results.citem_id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then(response => response.json())
    .then(()=>{
     setgrandtotal(grandtotal - results.ttl);
    productlist(result.filter(m => m.citem_id !== results.citem_id));
    })
    .catch(err => {
        alert(err.message);
      });};
   
  const Completelist = () => {
    if (!isloading) {
      return (
        <View>
          <View style={styles.flatlistcontainer}>
            <FlatList
              data={result}
              renderItem={({item}) => (
                <CustomerOrderItem cartdata={item} handledelet={handledelet} />
              )}
            />
          </View>
        
        </View>
      );
    } else {
      return <ActivityIndicator size="large" color="#00ff00" />;
    }
  };
  return (
    <View>
     <Completelist />
    </View>
  )
}

export default CustomerOrders