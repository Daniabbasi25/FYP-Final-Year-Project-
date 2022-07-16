import { View, Text,TouchableOpacity, Modal,Pressable,FlatList,ActivityIndicator  } from 'react-native'
import React,{useState} from 'react'
import { Card, CheckBox } from 'react-native-elements'
import styles from './styles';
import API from '../../API';
import * as RootNavigation  from '../../RootNavigation';
const CustomerOrderItem = (props) => {
    const {order_id,order_total,delivery_address,deliveryboy_id,order_status,shopid}=props.cartdata;
    
    const [modalVisible, setModalVisible] = useState(false);
    const [isloading, setloading] = useState(true);
    const [result, setresult] = useState([{}]);
 
    const getDataUsingGet = async () => {
        //GET request
        
        try{   
          const apiurl = `http://${API}/API/api/Order/getorddetailcus?mainid=${order_id}`;
      const response= await  fetch(apiurl); 
       const json = await response.json();  
    
            console.log("hiii"+JSON.stringify(json))
            setresult(json);
           
          
          }catch (error)
          {console.error(error)}
          finally{
              setloading(false);
              setModalVisible(true);
          }
        
         
      };
// list of order product 
const ListofProduct=(props)=>{

  const {productname,quantitytype,price,quantity,ptotal,status,oid}=props.cartdata; 
  
  const [statusd,setstatys]=useState(status);
  const handleaccept=async ()=>{
      try{   
        const apiurl = `http://${API}/API/api/Order/returnitem?opid=${oid}`;
    const response= await  fetch(apiurl); 
     const json = await response.json();  
          console.log("hiii"+JSON.stringify(json))
          setstatys("Recive")
        
        }catch (error)
        {console.error(error)}
    
   
  }
  const handlereject=async ()=>{
    try{   
      const apiurl = `http://${API}/API/api/Order/returnitem?opid=${oid}`;
  const response= await  fetch(apiurl); 
   const json = await response.json();  
        console.log("hiii"+JSON.stringify(json))
        setstatys("Return")
      
      }catch (error)
      {console.error(error)}
  
  }
  
    return(
        <Card>
<Text>{productname}</Text>
<Text>{quantity}</Text>
<Text>RS {price} per {quantitytype}</Text>
<Text>Total={ptotal}</Text>
{ statusd==null?<View>
<TouchableOpacity onPress={handleaccept}>
  <Text>
    Accept
  </Text>
</TouchableOpacity>
<TouchableOpacity onPress={handlereject}>
  <Text>
    Return
  </Text>
</TouchableOpacity>
</View>:<Text>{statusd}</Text> }


        </Card>
    );
};
const Flist=()=>{
    if (!isloading) {
        return (
        <View>
        <View style={styles.flatlistcontainer}>
        <FlatList
          data={result}
          renderItem={({item}) => <ListofProduct cartdata={item} handledelet={ props.handledelet()} />}
        />
      </View>
     
   
      </View>
        );
      } else {
        return <ActivityIndicator size="large" color="#00ff00" />;
      }
}
const handlerecived=async (id)=>{

  try{   
    const apiurl = `http://${API}/API/api/Order/Recivedmyproduct?mainid=${id}`;
const response= await  fetch(apiurl); 
 const json = await response.json();  

      console.log("hiii"+JSON.stringify(json))
    
      setModalVisible(false);
    
    }catch (error)
    {console.error(error)}
    
    
}
const handlenavigate=()=>{
  RootNavigation.navigate('RatingProduct', {oid:order_id,shopid:shopid});
           

}
const handlecancle=()=>{

}

  return (
    <Card >
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
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Select To Recive Products</Text>
            <Flist />
            <View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancle</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={()=>{
                handlerecived(order_id)
                props.handledelet(1)
              }}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
            </View>
          
          </View>
        </View>
      </Modal>
            <View style={styles.maincontainer}> 
       
            <View style={styles.pronamecontainer}>
                <Text style={styles.proname}>
                   Order Id: {order_id}
                </Text>
                <Text style={styles.proname}>
                    Order status={order_status}
                </Text>
                <Text style={styles.priceperkg}>
                    Delivery Address: {delivery_address}
                </Text>

            </View>
            <View style={styles.iconcontainer}>
           {
            order_status=="Active"?
           
            <TouchableOpacity onPress={handlecancle} style={styles.canclebutton}>
            {/* <Icon name="delete" size={25} color="red"/> */}<Text style={{color:"#FFF"}}>Cancel</Text>
            </TouchableOpacity>
            :order_status=="Deliverd"?
            <TouchableOpacity  onPress={getDataUsingGet} style={styles.Recive}>
            {/* <Icon name="delete" size={25} color="red"/> */}<Text style={{color:"#FFF"}}>Recive</Text>
            </TouchableOpacity>:order_status=="Recived"?
             <TouchableOpacity onPress={handlenavigate} style={styles.Rate}>
             {/* <Icon name="delete" size={25} color="red"/> */}<Text style={{color:"#FFF"}}>Rate</Text>
             </TouchableOpacity>
            :<Text>On Way</Text>
            }
            {/* <Text style={styles.itemtotal}>
                    Rs {order_total} 
                </Text> */}
            </View>
            </View>
        </Card>
  )
}

export default CustomerOrderItem