import { View, Text,ActivityIndicator,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import API from '../../API';
import { Button, Card } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-ratings';
const RatingProduct = ({route,navigation}) => {
    const {oid,shopid}=route.params;
  const [isloading, setloading] = useState(true);
  const [result, setresult] = useState([{}]);
  const getDataUsingGet = async () => {
    //GET request
    
    try{   
      const apiurl = `http://${API}/API/api/Order/getorddetailcus?mainid=${oid}`;
  const response= await  fetch(apiurl); 
   const json = await response.json();  

        console.log("hiii"+JSON.stringify(json))
        setresult(json);
      }catch (error)
      {console.error(error)}
      finally{
          setloading(false);
         
      }
    
     
  };
    
  useEffect(() => {
    getDataUsingGet()}, []);
  const ListofProduct=(props)=>{

    const {productname,quantitytype,price,quantity,ptotal,status,oid,pid}=props.cartdata; 
    const  ratingCompleted=async (rating)=> {
        try{   
            const apiurl = `http://${API}/API/api/Product/RatingOfProduct?rat=${rating}&pdata=${pid}`;
        const response= await  fetch(apiurl); 
         const json = await response.json();  
        
              console.log("hiii"+JSON.stringify(json))
              console.log("Rating is: " + rating)
            
            }catch (error)
            {console.error(error)}
            
        

      }
   
    
      return(
          <Card>
            <Text>{productname}</Text>
            <Rating
            
             onFinishRating={ratingCompleted}
             style={{ paddingVertical: 10 }}
         ratingCount={5}
/>
  
          </Card>
      );
  };
  const Flist=()=>{
      if (!isloading) {
          return (
          <View>
          <View >
          <FlatList
            data={result}
            renderItem={({item}) => <ListofProduct cartdata={item}  />}
          />
        </View>
     
        </View>
          );
        } else {
          return <ActivityIndicator size="large" color="#00ff00" />;
        }
  }

  const  ratingCompleted= async(rating)=> {
    console.log("Rating is: " + rating)
    try{   
        const apiurl = `http://${API}/API/api/Product/RatingOfShopkeeper?rat=${rating}&pdata=${shopid}`;
    const response= await  fetch(apiurl); 
     const json = await response.json();  
    
          console.log("hiii"+JSON.stringify(json))
          console.log("Rating is: " + rating)
        
        }catch (error)
        {console.error(error)}
        
  }

  return (
    <View>
<Card>
    <Text>
    shopkeeper Rating={shopid}

    </Text>
   
    <Rating
            
             onFinishRating={ratingCompleted}
             style={{ paddingVertical: 10 }}
         ratingCount={5}
/>
</Card>
<Flist />
<Button title="OK" onPress={()=>navigation.navigate('CustomerDashboard')}/>
    </View>
  )
}

export default RatingProduct