import { View, Text,FlatList,ActivityIndicator,TouchableOpacity,Modal,Pressable,Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import { Card } from 'react-native-elements'
import styles from './styles'
import API from '../../API'
import * as RootNavigation  from '../../RootNavigation';

const OrderDetails = ({route,navigation}) => {
  const {mainid,customername,deliveryaddress,customerid,isAssgin,deliveryboyname}=route.params;
  
  console.log(route.params)
  const [isloading, setloading] = useState(true);
  const [result, setresult] = useState([{}]);
  const [grandtotal, setgrandtotal] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [deliveryboys,setdeliveryboys]=useState([]);
  const [isdloading,setdloading]=useState(true);
  const [isbutton,setisbutton]=useState(isAssgin);
  const [dname,setdname]=useState(deliveryboyname);
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
      const apiurl = `http://${API}/API/api/Order/getorddetail?shid=${global.userId}&mainid=${mainid}`;
  const response= await  fetch(apiurl); 
   const json = await response.json();  

        console.log("hiii"+JSON.stringify(json))
        setresult(json);
        calculatethetotal(json);
      
      }catch (error)
      {console.error(error)}
      finally{
          setloading(false);
      }
    
     
  };
  useEffect(() => {
    getDataUsingGet()}, []);

// geeting deliveryboy data 
const handleshowdeliveryboy= async ()=>{
  try{   
    const apiurl = `http://${API}/API/api/User/getdeliveryboys`;
    const response= await  fetch(apiurl); 
    const json = await response.json();  

      console.log("deliveryboy"+JSON.stringify(json))
      setdeliveryboys(json);
      
    
    }catch (error)
    {console.error(error)}
    finally{
       setdloading(false);
    }
  setModalVisible(true)
}



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
    const handleassign=async (props)=>{
       console.log(props)
    try{   
      const apiurl = `http://${API}/API/api/Order/Assignorder?did=${props}&mainid=${mainid}`;
  const response= await  fetch(apiurl); 
   const json = await response.json();
      console.log("hiii"+JSON.stringify(json))
      setdname(json);
      
      // =========================
     
      setisbutton(true);
      setModalVisible(false);
      }catch (error)
      {console.error(error)}
      finally{
        RootNavigation.navigate("ShopKeeperdashboardScreen")
      }
     
    }
    
    const Deliveryboylist=(props)=>{
      const {ddata}= props
      console.log("deliveryboys=",ddata.deliveryboy_id)
      return(
       <Card>
          <View style={styles.detailcard}>

          
          <View style={styles.subdetail}>
            <Text style={{fontSize:25,color:'#000',fontWeight:'bold',}}>{ddata.deliveryboy_name}</Text>
            <Text style={{color:'#000'}}>{ddata.deliveryboy_phoneno}</Text>
            <Text>{ddata.deliveryboy_bikeno}</Text>
          </View>
          <View style={styles.subdetail}>
            {/* <Text style={{fontSize:18,color:'#000'}}>Address</Text> */}
            <Text>"{ddata.deliveryboy_address}"</Text>
            <TouchableOpacity style={styles.assignorder} onPress={()=>handleassign(ddata.deliveryboy_id)}>
              <Text style={{color:'#fff'}}>Assign Order</Text>
            </TouchableOpacity>
          </View>
          </View>
          </Card>
      );
    }
    const ModelFlatList=()=>{
      if(!isdloading){
        return(
      <View style={styles.modalView}>
             <Card>
          <View style={styles.detailcard}>

          
          <View style={styles.subdetail}>
            <Text style={{fontSize:18,color:'#000',fontWeight:'bold',}}>Name</Text>
            <Text style={{fontSize:18,color:'#000',fontWeight:'bold',}}>Phone#</Text>
            <Text style={{fontSize:18,color:'#000',fontWeight:'bold',}}>Bike Number</Text>
          </View>
          
          </View>
          </Card>
            <FlatList 
              data={deliveryboys}
              renderItem={({item})=><Deliveryboylist ddata={item}/>}
              style={styles.flatlistcontainermodel}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancle</Text>
            </Pressable>
          </View>
        );
      }
      else{
        return(
<View style={styles.modalView}>
            
<ActivityIndicator size="large" color="orange" />
          </View>
        );
      }
    }

    const Mybutton=()=>{
      if(isbutton){
        return <Text>Order Assigned to {dname}</Text>
      }
      else{
        return(
<TouchableOpacity style={styles.mybutton}  onPress={handleshowdeliveryboy}>
          <Text style={{fontSize:15,color:'#fff'}}>
            Assigne to Delivery Boy 
          </Text>
        </TouchableOpacity>
        );
      }
    }
  return (
    <View>
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <ModelFlatList />
        </View>
      </Modal>
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
        <Mybutton />
      
      </View>
    </View>
  )
}

export default OrderDetails