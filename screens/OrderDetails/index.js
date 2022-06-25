import { View, Text,FlatList,ActivityIndicator,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import { Card } from 'react-native-elements'
import styles from './styles'
import API from '../../API'
const OrderDetails = ({route,navigation}) => {
  const {mainid,customername,deliveryaddress,customerid}=route.params;
  console.log(route.params)
  const [isloading, setloading] = useState(true);
  const [result, setresult] = useState([{}]);
  const [grandtotal, setgrandtotal] = useState(0);
  const calculatethetotal = json => {
    // calculate the grand total
    // result.
    let i = 0;
    json.forEach(item => {
      i = item.ptotal + i;
      console.log(i);

      // grandtotal=item.ttl+grandtotal;
    });
    setgrandtotal(i);
  };
  const getDataUsingGet = async () => {
    //GET request
    
    try{   
      const apiurl = `http://192.168.1.113/API/api/Order/getorddetail?shid=${global.userId}&mainid=${mainid}`;
  const response= await  fetch(apiurl); 
   const json = await response.json();  
  //  settotal(0)
        console.log("hiii"+JSON.stringify(json))
        setresult(json);
        calculatethetotal(json);
      //  const t=json.map((num)=>{
      //     console.log(`total=${total} and num.ttl=${num.ttl}`)
          
      //     let n=parseInt(num.ttl)
      //     // settotal( parseInt(total)+parseInt(n));
      //   })
      }catch (error)
      {console.error(error)}
      finally{
          setloading(false);
      }
    
     
  };
  useEffect(() => {
    getDataUsingGet()}, []);
    const Completelist = () => {
        if (!isloading) {
          return (
          <View>
          <View style={styles.flatlistcontainer}>
          <FlatList
            data={result}
            renderItem={({item}) => <Productitem cartdata={item} />}
          />
        </View>
       
     
        </View>
          );
        } else {
          return <ActivityIndicator size="large" color="#00ff00" />;
        }
      };
    const Productitem=(props)=>{
      const {productname,quantitytype,price,quantity}=props.cartdata;
      return(
        <View style={styles.productcontainer}>
        <Text style={styles.producttext}>
          {productname}
        </Text>
        <Text>
         Rs.{price}/{quantity}{quantitytype}
        </Text>
        </View>
        
      )
    }
  return (
    <View>
 <Text style={styles.heading}>
        Order Summary
      </Text>
    
    <Card>
      
      <Text style={styles.addresstext}>
        {customername}
      </Text>
      <View style={styles.flatlistcontainer}>
     <Completelist />
    
      </View>
      
      <View style={styles.addressbox}>
      <Text style={styles.addresstext}>
        Delivery Address:  {deliveryaddress}
      </Text>
      {/* <TextInput value={address} style={styles.addressinput} onChangeText={(text)=>{setaddress(text)}}></TextInput> */}
      </View>
      <Text style={{marginTop:30,fontSize:25,fontWeight:'bold',color:'#000',justifyContent:'center'}}>
       Total Price={grandtotal}
      </Text>
      
    </Card>
    <View style={styles.buttoncontainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={{fontSize:15,color:'#fff'}}>
            Assign to Delivery Boy 
          </Text>
        </TouchableOpacity>
      
      </View>
    </View>
  )
}

export default OrderDetails