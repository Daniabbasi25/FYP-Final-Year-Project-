import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Order from '../Order';
import styles from './styles';
import Orders from './Orders';
import API from '../../API';
global.updatebutton=0;
const RecentOrder = () => {
  //const orderurl = `http://${API}/API/api/Order/getMainOrder?sid=${global.userId}`;

  const [isloading, setloading] = useState(true);
  const [result, orderlist] = useState([]);

  const getDataUsingGet = async () => {
    //GET request
    
    try{   
      const apiurl = `http://${API}/API/api/Order/getOrder?sid=${global.userId}`;
  const response= await  fetch(apiurl); 
   const json = await response.json();

        console.log("hiii"+JSON.stringify(json))
        orderlist(json);
        

      }catch (error)
      {console.error(error)}
      finally{
        setloading(false);
      }
    
     
  };


  useEffect(() => {
    getDataUsingGet()}, [global.updatebutton]);
  const Flist=()=>{
    if(!isloading)
    {
     return( 
     <View style={styles.container}>
      <FlatList
        data={result}
        // keyExtractor={({id}, index) => order_id}
        //  data={this.state.itemList.slice(0, 30)}
        renderItem={({item}) => <Order ord={item} />}
        // renderItem={({item})=>{
        //   <Text>
        //     {item.order_id}
        //   </Text>
        // }}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        style={styles.flatList}
      />
    </View>
    )}
    else{
    
        return (<ActivityIndicator size="large" color="#00ff00" />);
      
    }
  }
  return (
    <View>
       <Flist />

    </View>
   
  );
};

export default RecentOrder;
