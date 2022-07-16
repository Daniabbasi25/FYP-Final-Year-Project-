import { View, Text,ActivityIndicator,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import API from '../../API';
import CustomerOrderItem from '../../components/CustomerOrderItem';
import styles from './styles';
const CustomerOrders = () => {
  const [isloading, setloading] = useState(true);
  const [result, productlist] = useState([{}]);
  let counter=0;
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
  }, [counter]);
  const handledelet = result => {
    counter=+result;
   };
   
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