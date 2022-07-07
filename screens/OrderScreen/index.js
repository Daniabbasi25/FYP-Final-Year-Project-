import { View, Text, TouchableOpacity,FlatList,ActivityIndicator, Dimensions } from 'react-native'
import React, { useState,useEffect } from 'react'
import RecentOrder from '../../components/RecentOrder';
import styles from './styles';
import API from '../../API';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import * as RootNavigation  from '../../RootNavigation';

const OrderScreen = () => {
  const [ispending,setispending]=useState(true);
  const [iscomplete,setiscomplete]=useState(false);
  const [isonway,setisonway]=useState(false);
  const [isSchedue,setisSchedue]=useState(false);
  const [isCancle,setisCancle]=useState(false);
const [isloading, setloading] = useState(true);
const [result, orderlist] = useState([]);
const [data,setdata]=useState(result.filter(m => m.status == "Active"));

const handlepending=()=>{
  setispending(true);
  setiscomplete(false);
  setisonway(false);
  setisSchedue(false);
  setisCancle(false);
  setdata(result.filter(m => m.status =="Active"|| m.status=="Assigned"));
}
const handlecomplete=()=>{
  setispending(false);
  setiscomplete(true);
  setisonway(false);
  setisSchedue(false);
  setisCancle(false);
  setdata(result.filter(m => m.status == "Deliverd"));
}
const handleonway=()=>{
  setispending(false);
  setiscomplete(false);
  setisonway(true);
  setisSchedue(false);
  setisCancle(false);
  setdata(result.filter(m => m.status == "OnWay"));
}
const handleschedule=()=>{
  setispending(false);
  setiscomplete(false);
  setisonway(false);
  setisSchedue(true);
  setisCancle(false);
}
const handlecancle=()=>{
  setispending(false);
  setiscomplete(false);
  setisonway(false);
  setisSchedue(false);
  setisCancle(true);
}


  const getDataUsingGet = async () => {
    //GET request
    
    try{   
      const apiurl = `http://${API}/API/api/Order/getOrder?sid=${global.userId}`;
  const response= await  fetch(apiurl); 
   const json = await response.json();

        console.log("hiii"+JSON.stringify(json))
        orderlist(json);
        setdata(json.filter(m => m.status =="Active" || m.status=="Assigned"));

      }catch (error)
      {console.error(error)}
      finally{
        setloading(false);
      }
    
     
  };


  useEffect(() => {
    getDataUsingGet()}, [global.updatebutton]);
let  myIcon = <Icon name="clockcircleo" size={30} color="#fff" />;
if(ispending){
   myIcon = <Icon name="clockcircleo" size={30} color="#fff" />;

}  
else if(iscomplete){
  myIcon = <Icon name="checkcircleo" size={30} color="#fff" />;
}
else if(isonway){
  myIcon=<Icon2 name="delivery-dining" size={30} color="#fff" />;
}
const Order = props => {
   const {customername ,deliveryaddress,status,customerid,mainid,isAssgin,deliveryboyname} =props.ord;
  return (
    <TouchableOpacity onPress={()=>{RootNavigation.navigate("OrderDetail",{mainid:mainid,customername:customername,deliveryaddress:deliveryaddress,customerid:customerid,isAssgin:isAssgin,deliveryboyname:deliveryboyname})}} >

    
    <View style={styles.container}>
        {/* image */}
        <View style={styles.icon}>
        {myIcon}
        </View>
        <Text style={{color:'#748A9D'}}>
             {/* {customer_id} */}
             {customername}
        </Text>
        <Text style={{color:'#A6BCD0'}}>
            {deliveryaddress}
        </Text>
        <Text style={{color:'#748A9D'}}>
             {status}
        </Text>
       
    </View>
    </TouchableOpacity>
  )
}
  const Flist=()=>{
    if(!isloading)
    {
     return( 
     <View style={styles.containerflist}>
      <FlatList
        data={data}
       
        renderItem={({item}) => <Order ord={item} />}
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
    <View style={{backgroundColor:'#fff',flex:1}}>
   
      
      <View style={styles.buttoncontainer}>
      
        <TouchableOpacity style={[styles.text,ispending ? styles.activebutton :styles.notactive]} onPress={handlepending}>
          <Text style={ispending?styles.white:{color:'#748A9D'}}>Pending</Text>
        </TouchableOpacity >
        <TouchableOpacity style={[styles.text,iscomplete?styles.activebutton: styles.notactive]} onPress={handlecomplete}>
          <Text style={iscomplete? styles.white:{color:'#748A9D'}}>Complete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.text,isonway?styles.activebutton: styles.notactive]} onPress={handleonway}>
          <Text style={isonway? styles.white:{color:'#748A9D'}}>ON way</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.text,isSchedue?styles.activebutton: styles.notactive]} onPress={handleschedule}>
          <Text style={isSchedue? styles.white:{color:'#748A9D'}}>Schedue</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={[styles.text,isCancle?styles.activebutton: styles.notactive]} onPress={handlecancle}>
          <Text style={isCancle? styles.white:{color:'#748A9D'}}>Cancle</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flistcontainer}>
        {/* //<RecentOrder /> */}
        <Flist />

      </View>
    </View>
  )
}

export default OrderScreen;