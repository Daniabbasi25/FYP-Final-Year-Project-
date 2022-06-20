import {View, Text, TextInput, TouchableOpacity,ActivityIndicator,FlatList,Dimensions} from 'react-native';
import React,{useState,useEffect} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import API from '../../API'
import CustomerProductItem from '../../components/CustomerProductItem';
const CustomerProduct = () => {
  const [isloading, setloading] = useState(true);
  const [result, productlist] = useState([{}]);
  const [filterdata,getfilterdata]=useState([]);
  const [search,setserch]=useState();
  const serchFilter=(text)=>{
    if(text){
      const newData=result.filter((item)=>{
        const itemData=item.product_name?  item.product_name
                :'';
        const textData=text;
        return itemData.indexOf(textData)>-1;
      });
      serchFilter(newData);
      setserch(text);
    }
    else{
      serchFilter(result);
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
          getfilterdata(json);
  
        }catch (error)
        {console.error(error)}
        finally{
            setloading(false);
        }
      
       
    };
  
  
  useEffect(() => {
    getDataUsingGet()}, []);
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
      <TouchableOpacity style={styles.button}>
        <Text style={{color:'#fff',fontSize:18}}>
          All
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={{color:'#fff',fontSize:18}}>
          New
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={{color:'#fff',fontSize:18}}>
          Fruit
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={{color:'#fff',fontSize:18}}>
          Vegitable
        </Text>
      </TouchableOpacity>

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
  );
};

export default CustomerProduct;
