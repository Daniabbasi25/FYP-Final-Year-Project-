import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  Alert,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/Ionicons';

import {androidCameraPermission} from '../../permissions';
import {CheckBox, Input} from 'react-native-elements';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import API from '../../API';
const UpdateProduct = ({ route, navigation }) => {
  console.log("rout="+route.params)
  const {
    product_id, product_price,product_quantity,productimage,imageip } = route.params;

  const [quantity, setquantity] = useState(product_quantity.toString());
  const [price, setprice] = useState(product_price.toString());
  const [imagelink, setimage] = useState({});
  const [isimage, setisimage] = useState(true);
  const [isapiimage,setisapiimage]=useState(true)
console.log("data of route="+product_id+"=="+productimage+"=="+product_price+"=="+product_quantity+"=="+imageip)
  

  const onselect = async () => {
    const permissionstatus = await androidCameraPermission();
    if (permissionstatus || Platform.OS == 'ios') {
      Alert.alert('product picture', 'Chose and option', [
        {text: 'Camera', onPress: oncamera},
        {text: 'Gallery', onPress: onGallery},
        {text: 'Cancle', onPress: () => {}},
      ]);
    }
    // alert('upload image');
  };
  // for opening the camera
  const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    },
  };
  const oncamera = async () => {
    const result = await launchCamera(options);
    console.log(result);
    imageupload(result.assets[0]);
    setisimage(true);
    setimage(result.assets[0]);
    setisapiimage(false);
    // ===============================================================
  };

  // for opening the gallery
  const onGallery = async () => {
    const result = await launchImageLibrary(options);
    console.log(result);
    imageupload(result.assets[0]);
    setisimage(true);
    setimage(result.assets[0]);
    setisapiimage(false);
  };
  const imageupload = imagepath => {
    alert(JSON.stringify(imagepath));
  };
  const handleupload = () => {
    console.log('hi this is console');
    if (isimage) {
      const data = new FormData();
      console.log('image Link : ' + imagelink);
      data.append('image', {
        uri: imagelink.uri,
        type: imagelink.type,
        name: imagelink.fileName,
      });

      
      data.append('quantity', quantity);
      data.append('price', price);
      data.append('shopkeeperid', global.userId);
      console.log(
        '===========+' + 
        quantity,
        price + '==================',
      );
      fetch(`http://${API}/API/api/Product/Upload`, {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'multipart/form-data ',
        },
      })
        .then(response => response.json())
        .then(resp => {
          alert('successfully upload' + resp);
          navigation.navigate('shopkeeperproducts')
        })
        .catch(err => {
          alert(err);
        });
    }
  };
  const Desingimage = () => {
    if (isimage) {
      if(isapiimage){
        return (
          <View style={styles.image}>
            <Image
              // source={require('')}
              source={{uri: imageip+productimage}}
              style={styles.mainimage}
            />
          </View>
        );
      }
      else

     { return (
        <View style={styles.image}>
          <Image
            // source={require('')}
            source={{uri: imagelink.uri}}
            style={styles.mainimage}
          />
        </View>
      );}
    } else {
      return (
        <View style={styles.image}>
          <Icon name="add-circle-outline" style={styles.icon} size={80}></Icon>
          {/* <Text>Upload Image</Text> */}
        </View>
      );
    }
  };
  return (
    <View style={styles.maincontainer}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={onselect}>
            <Desingimage />
          </TouchableOpacity>
       

          <View style={styles.inputcontainer}>
            <Text style={styles.lable}>Quantity</Text>
            <TextInput
              value={quantity}
              onChangeText={text => setquantity(text)}
              keyboardType="numeric"
              style={styles.inputfield}
            />
          </View>
          <View style={styles.inputcontainer}>
            <Text style={styles.lable}>Price</Text>
            <TextInput
              // placeholder="Price"
              value={price}
              onChangeText={text => setprice(text)}
              keyboardType="numeric"
              style={styles.inputfield}
            />
          </View>
         
         

          <TouchableOpacity style={styles.uploadbutton} onPress={handleupload}>
            <Text style={styles.buttontext}>Update</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProduct;
