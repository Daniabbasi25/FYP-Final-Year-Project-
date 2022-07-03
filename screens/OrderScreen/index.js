import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import RecentOrder from '../../components/RecentOrder';
import styles from './styles';

const OrderScreen = () => {
  const [ispending,setispending]=useState(true);
  const [iscomplete,setiscomplete]=useState(false);
  const [isonway,setisonway]=useState(false);
  const [isSchedue,setisSchedue]=useState(false);
  const [isCancle,setisCancle]=useState(false);


const handlepending=()=>{
  setispending(true);
  setiscomplete(false);
  setisonway(false);
  setisSchedue(false);
  setisCancle(false);
}
const handlecomplete=()=>{
  setispending(false);
  setiscomplete(true);
  setisonway(false);
  setisSchedue(false);
  setisCancle(false);
}
const handleonway=()=>{
  setispending(false);
  setiscomplete(false);
  setisonway(true);
  setisSchedue(false);
  setisCancle(false);
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
  return (
    <View style={{backgroundColor:'#fff',flex:1}}>
      {/* <Text>Orders</Text> */}
      {/* <RecentOrder /> */}
      
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
      <View>
        <RecentOrder />
      </View>
    </View>
  )
}

export default OrderScreen;