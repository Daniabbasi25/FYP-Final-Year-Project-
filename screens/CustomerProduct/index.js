import {View, Text, TextInput, TouchableOpacity,ActivityIndicator,FlatList,Dimensions, Button} from 'react-native';
import React,{useState,useEffect} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import API from '../../API'

import CustomerProductItem from '../../components/CustomerProductItem';
const CustomerProduct = ({navigation}) => {
  const [isloading, setloading] = useState(true);
  const [result, productlist] = useState([{}]);
  const [data, setdata] = useState([{}]);
  let counter=0;
  const [filterdata,getfilterdata]=useState([{}]);
  const [search,setserch]=useState();
  const serchFilter=(text)=>{
    if(text){
      const newData=result.filter((item)=>{
        const itemData=item.product_name?  item.product_name.toUpperCase()
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
      <TouchableOpacity style={styles.button} onPress={handleall}>
        <Text style={{color:'#fff',fontSize:14}}>
          All
        </Text>
      </TouchableOpacity>
     
      <TouchableOpacity style={styles.button} onPress={handlefruit}>
        <Text style={{color:'#fff',fontSize:14}}>
          Fruit
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleveg}>
        <Text style={{color:'#fff',fontSize:14}}>
          Vegitable
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlebest}>
        <Text style={{color:'#fff',fontSize:14}}>
          Best
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlebestfruit}>
        <Text style={{color:'#fff',fontSize:14}}>
          Best Fruits
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlebestVegitable}>
        <Text style={{color:'#fff',fontSize:14}}>
          Best Vegitable
        </Text>
      </TouchableOpacity>

     </View>
     <Button title='Search By Shopkeeper name' onPress={()=>navigation.navigate("Search")}/>
     <View style={styles.flatlistbox}>
     <ProductListview />
     </View>
   
    </View>
  );
};

export default CustomerProduct;
