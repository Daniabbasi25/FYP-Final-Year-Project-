import { View, Text, TouchableOpacity, TextInput,FlatList,ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react'
import { Card } from 'react-native-elements'
import styles from './styles';
import API
 from '../../API';
const CheckOut = ({route,navigation}) => {
  const {total}=route.params;
  console.log(total)
  const [isloading, setloading] = useState(true);
const [result, productlist] = useState([{}]);
const [address, setaddress] = useState('');
//  const [total,settotal]=useState(0)
//  const t=useContext(CartContext)
  
   const getDataUsingGet = async () => {
      //GET request
      
      try{   
        const apiurl = `http://${API}/API/api/CartItem/Allcart?customerid=${global.userId}`;
    const response= await  fetch(apiurl); 
     const json = await response.json();
    //  settotal(0)
          console.log("hiii"+JSON.stringify(json))
          productlist(json);
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
const getuseraddress=async ()=>{
  try{   
    const apiurl = `http://${API}/API/api/User/getcustomeraddress?id=${global.userId}`;
const response= await  fetch(apiurl); 
 const json = await response.json();
      console.log("hiii"+JSON.stringify(json))
      setaddress(json);
 
    }catch (error)
    {console.error(error)}
    finally{
        setloading(false);
    }
  
}
  
  useEffect(() => {
    getDataUsingGet()}, []);
    useEffect(()=>{
      getuseraddress()
    },[])
    const handleorder=()=>{
      const data = new FormData();
      data.append('cusid', global.userId);
      data.append('grandtotal', total);
      data.append('daddress', address);

     
      fetch(`http://${API}/API/api/Order/PlaceOrder`, {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'multipart/form-data ',
        },
      })
        .then(response => response.json())
        .then(resp => {
          alert('successfully Place Order' + resp);
          navigation.navigate('CustomerDashboard')
        })
        .catch(err => {
          alert(err);
        });
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
    const {name,price,quantity,type,ttl,productimage}=props.cartdata;
    return(
      <View style={styles.productcontainer}>
      <Text style={styles.producttext}>
        {name}
      </Text>
      <Text>
       Rs.{price}/{quantity}{type}
      </Text>
      </View>
      
    )
  }
  return (
    <Card>
      <Text style={styles.heading}>
        Checkout
      </Text>
      <Text style={styles.orderinfo}>
        Order Information:
      </Text>
      <View>
     <Completelist />
    
      </View>
      
      <View style={styles.addressbox}>
      <Text style={styles.addresstext}>
        Delivery Address
      </Text>
      <TextInput value={address} style={styles.addressinput} onChangeText={(text)=>{setaddress(text)}}></TextInput>
      </View>
      <Text style={{marginTop:30,fontSize:25,fontWeight:'bold',color:'#000'}}>
       Total Price =RS {total}
      </Text>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity style={styles.button} onPress={handleorder}>
          <Text style={{fontSize:15,color:'#fff'}}>
            Order Now
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Schedule',{total:total,address:address})}>
          <Text style={{fontSize:15,color:'#fff'}}>
            Schedule Order
          </Text>
        </TouchableOpacity>
      </View>
    </Card>
  )
}

export default CheckOut