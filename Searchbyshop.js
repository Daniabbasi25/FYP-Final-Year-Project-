import { View, Text,TouchableOpacity, Modal,Pressable,FlatList,ActivityIndicator,StyleSheet,TextInput,Dimensions  } from 'react-native'
import React,{useState,useEffect} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { Card, CheckBox } from 'react-native-elements';
import API from './API'
import CustomerProductItem from './components/CustomerProductItem';
const Searchbyshop = () => {
    const [isloading, setloading] = useState(true);
  const [result, productlist] = useState([{}]);
  const [data, setdata] = useState([{}]);
  let counter=0;
  const [filterdata,getfilterdata]=useState([{}]);
  const [search,setserch]=useState();
  const serchFilter=(text)=>{
    if(text){
      const newData=result.filter((item)=>{
        const itemData=item.product_name?  item.sname.toUpperCase()
                :''.toUpperCase();
        const textData=text.toUpperCase();
        return itemData.indexOf(textData)>-1;
      });
      // serchFilter(newData);
      getfilterdata(newData)
      setserch(text);
    }
    else{
      getfilterdata(data);
      // serchFilter(result);
      setserch(text);
    }
  }


   const getDataUsingGet = async () => {
      //GET request
      
      try{   
        const apiurl = `http://${API}/API/api/Product/AllProducts`;
    const response= await  fetch(apiurl); 
     const json = await response.json();
  
          console.log("hiii"+JSON.stringify(json))
          productlist(json);
          setdata(json);
          getfilterdata(json);
  
        }catch (error)
        {console.error(error)}
        finally{
            setloading(false);
        }
      
       
    };
  
  
  useEffect(() => {
    getDataUsingGet()}, [counter]);


    const handlefruit=async ()=>{

      try{   
        const apiurl = `http://${API}/API/api/Product/Allfruits`;
    const response= await  fetch(apiurl); 
     const json = await response.json();
  
          console.log("hiii"+JSON.stringify(json))
          setdata(json);
          getfilterdata(json);
  
        }catch (error)
        {console.error(error)}
        finally{
            setloading(false);
        }
      
    }
    const handleveg=async ()=>{

      try{   
        const apiurl = `http://${API}/API/api/Product/AllVegitable`;
    const response= await  fetch(apiurl); 
     const json = await response.json();
  
          console.log("hiii"+JSON.stringify(json))
          setdata(json);
          getfilterdata(json);
  
        }catch (error)
        {console.error(error)}
        finally{
            setloading(false);
        }
      
    }
    const handlebestVegitable=async ()=>{

      try{   
        const apiurl = `http://${API}/API/api/Product/bestvegitable`;
    const response= await  fetch(apiurl); 
     const json = await response.json();
  
          console.log("hiii"+JSON.stringify(json))
          setdata(json);
          getfilterdata(json);
  
        }catch (error)
        {console.error(error)}
        finally{
            setloading(false);
        }
      
    }
    const handlebestfruit=async ()=>{

      try{   
        const apiurl = `http://${API}/API/api/Product/bestfruit`;
    const response= await  fetch(apiurl); 
     const json = await response.json();
  
          console.log("hiii"+JSON.stringify(json))
          setdata(json);
          getfilterdata(json);
  
        }catch (error)
        {console.error(error)}
        finally{
            setloading(false);
        }
      
    }
    const handlebest=async ()=>{

      try{   
        const apiurl = `http://${API}/API/api/Product/bestall`;
    const response= await  fetch(apiurl); 
     const json = await response.json();
  
          console.log("hiii"+JSON.stringify(json))
          setdata(json);
          getfilterdata(json);
  
        }catch (error)
        {console.error(error)}
        finally{
            setloading(false);
        }
      
    }
    const handleall=()=>{
      getDataUsingGet()
    }
    const ProductListview = () => {
      if (!isloading) {
        return (
          <FlatList
          data={filterdata}
           //data={result.slice(0, 2)}
          horizontal={false}
          // renderItem={({item}) => <CustomerProductItem productdata={item} />}
          renderItem={({item}) => <CustomerProductItem productdata={item} />}
          showsHorizontalScrollIndicator={false}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          // snapToInterval={Dimensions.get('window').height}
          numColumns={2}
          
        />
        );
      } else {
        return <ActivityIndicator size="large" color="#00ff00" />;
      }
    };
   

  return (
    <View>
     {/* header => name */}
     <View style={styles.uppercontainer}>
      <TextInput 
        style={styles.textfield} 
        placeholder="Search"  
        value={search}
        underlineColorAndroid="transparent"
        onChangeText={(text)=>serchFilter(text)}
      
      >
        
      
      </TextInput>
      {/* <Icon name="person-outline" size='30' color='#000'/> */}
      <Icon name="search-outline" size={30}></Icon>
     </View>
     <View style={styles.buttoncontainer}>
      
     </View>
    
     <View style={styles.flatlistbox}>
     <ProductListview />
     </View>
     {/* search bar */}
     {/* All ,New ,Fruit,Vegitable */}
     {/* item list flat list  =>
                              image
                              name
                              price 
                              Add To cart
     */}
     
    </View>
 
  )
}

export default Searchbyshop
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({


    uppercontainer:{
        borderColor:'black',
        backgroundColor:'#fff',
        borderWidth:1,
        borderRadius:20,
        marginHorizontal:10,
        marginTop:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'

    },
    textfield:{
       color:'#000',
    //    backgroundColor:'red',
       width:width/1.2

    },
    buttoncontainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:10,
        marginTop:5

    },
    button:{
        backgroundColor:'gray',
        padding:5,
    },
    flatlistbox:{
        height:height/1.5,
        alignItems:'center'
    }
})