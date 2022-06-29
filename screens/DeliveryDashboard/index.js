import { View, Text ,FlatList,ActivityIndicator, TouchableOpacity} from 'react-native'
import React,{useState,useEffect} from 'react'
import API from '../../API';
import { Card } from 'react-native-elements';
import styles from './styles';
import * as RootNavigation  from '../../RootNavigation';

const DeliveryBoyDashboard = () => {
  const [isloading, setloading] = useState(true);
  const [data, setdata] = useState([{}]);
  const [orderstatus,setorderstatus]=useState('')
// ====================get the data of active orders
const getDataUsingGet = async () => {
  //GET request

  try {
    const apiurl = `http://${API}/API/api/Order/deliveryorderget?id=${global.userId}`;
    const response = await fetch(apiurl);
    const json = await response.json();
    console.log('hiii' + JSON.stringify(json));
    setdata(json);
    
  } catch (error) {
    console.error(error);
  } finally {
    setloading(false);
  }
};

useEffect(() => {
  getDataUsingGet();
}, []);
// ==================end fuctions related to  apis

const OrderItem=(props)=>{
  const {order_id,order_total,customer_id,delivery_address,order_status}=props.orddata;
  setorderstatus(order_status)
  const handlepickup=async (id)=>{
    try {
      const apiurl = `http://${API}/API/api/Order/pickorder?mainid=${id}`;
      const response = await fetch(apiurl);
      const json = await response.json();
   
    } 
    catch (error) 
    {
      console.error(error)
    }
    
  }
  const handleshiped=async (id)=>{
    console.log("presed handleship:",id)
    try {
      const apiurl = `http://${API}/API/api/Order/Deliverd?mainid=${id}`;
      const response = await fetch(apiurl);
      const json = await response.json();
     
    } 
    catch (error) 
    {
      console.error(error)
    }
  }
  return(
  <Card>
    <View style={styles.topcontainer}>
      <Text style={styles.topfont}>ORder Id:{order_id}</Text>
      <Text style={styles.topfont}>Total Bill =RS{order_total}</Text>
    </View>
    <View style={styles.secondtopcontainer}>
      <View>

      
      <Text style={styles.bluetext}>Order Placed by</Text>
      <Text style={styles.bluetext}>Customer Contact Number</Text>
      </View>
      <Text style={styles.greentext}>Status {order_status}</Text>
    </View>
    <View style={styles.secondtopcontainer}>
      <View>
        <Text style={styles.blacktext}>
          Pickup Address=
        </Text>
        <Text style={styles.blacktext}>
          Delivery Address={delivery_address}
        </Text>
      </View>
      {order_status=="OnWay"  ?  
      <TouchableOpacity onPress={()=>handleshiped(order_id)}>
        <Text style={styles.whitebutton}>
           Ship
        </Text>
      </TouchableOpacity> : order_status=="Assigned"? 
      <TouchableOpacity onPress={()=>handlepickup(order_id)}>
        <Text style={styles.whitebutton}>
        Pick Order
        </Text>
      </TouchableOpacity>:<Text>Deliverd </Text>}
      
    </View>
  </Card>
  );
};
const OrderFlatlist=()=>{

  if (!isloading) {
    return (
      <View>
        <View style={styles.flatlistcontainer}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <OrderItem orddata={item} />
            )}
          />
        </View>
        
      </View>
    );
  } else {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }
}

  return (
    <View>
      <OrderFlatlist />
      
    </View>
  )
}

export default DeliveryBoyDashboard