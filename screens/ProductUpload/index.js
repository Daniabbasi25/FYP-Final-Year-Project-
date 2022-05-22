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
import TextInputfield from '../../components/TextInputfield';
import styles from './styles';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import PrimaryButton from '../../components/PrimaryButton';
import {androidCameraPermission} from '../../permissions';
import {CheckBox, Input} from 'react-native-elements';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import API from '../../API';
const ProductUpload = () => {
  const [kg, setkg] = useState(false);
  const [dozn, setdozn] = useState(false);
  const [quanitytype, setquantitytype] = useState('');
  const [Fruit, setfruit] = useState(false);
  const [Vegitable, setvegitable] = useState(false);
  const [category, setcategory] = useState('');
  const [productname, setproductname] = useState('');
  const [quantity, setquantity] = useState('');
  const [price, setprice] = useState('');
  const [imagelink, setimage] = useState();
  const [isimage, setisimage] = useState(false);

  const quantitykg = () => {
    setkg(true);
    setdozn(false);
    setquantitytype('kg');
  };
  const quantitydozn = () => {
    setkg(false);
    setdozn(true);
    setquantitytype('dozn');
  };
  const categoryfr = () => {
    setvegitable(false);
    setfruit(true);
    setcategory('Fruit');
  };
  const categoryve = () => {
    setvegitable(true);
    setfruit(false);
    setcategory('Vegitable');
  };

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
  const oncamera = () => {
    alert('on cam');
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      alert(image);
      setimage(image);
      setisimage(true);
      imageupload(image.path);
    });
    // launchCamera(options?, callback);
    // =============================================================

    // ===============================================================
  };
  // for opening the gallery
  const onGallery = () => {
    // alert('on Gallery');
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      imageupload(image.path);
      setisimage(true);
      setimage(image.path);
    });
  };
  const imageupload = imagepath => {
    alert(imagepath);
  };
  const handleupload = () => {
    // alert('click upload');
    // Alert.alert(
    //   '' + productname + '' + quanitytype + '' + quantity + '' + category,
    // );
    console.log('hi this is console');
    if (isimage) {
      const formdata = new FormData();
      console.log(imagelink);
      formdata.append('image', {
        uri: imagelink.path,
        name: 'image.png',
        filename: 'image123',
        type: imagelink.mime,
      });

      console.log('form data', formdata);
      const res = fetch(`http://${API}/apiv2/api/Product/Upload`, {
        method: 'post',
        body: formdata,
        headers: {
          'Content-Type': 'multipart/form-data ',
        },
      })
        .then(response => {
          if (!response.ok) {
            throw Error('Check your connection');
          } else {
            alert('image upload Successfull');
          }
          response.json();
        })
        .then(data => console.log('---response', data))
        .catch(err => {
          alert(err.message);
        });
    } else {
      alert('kidnly upload image');
    }
  };
  const Desingimage = () => {
    if (isimage) {
      return (
        <View style={styles.image}>
          <Image
            // source={require('')}
            source={{uri: imagelink}}
            style={{width: 150, height: 150}}
          />
          {/* <Text>{imagelink}</Text> */}
        </View>
      );
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
            {/* <Image source={require(imagelink)} /> */}
            <Desingimage />
          </TouchableOpacity>
          <View style={styles.inputcontainer}>
            <Text style={styles.lable}>Product Name</Text>
            <TextInput
              // placeholder="Product Name"
              value={productname}
              // secure={false}
              onChangeText={text => setproductname(text)}
              style={styles.inputfield}
            />
          </View>

          {/* <Input
            placeholder="Category"
            value={productname}
            // secure={false}
            onChangeText={text => setproductname(text)}
          /> */}
          <View style={styles.inputcontainer}>
            <Text style={styles.lable}>Quantity</Text>
            <TextInput
              // placeholder="Quantity"
              value={quantity}
              onChangeText={text => setquantity(text)}
              keyboardType="numeric"
              style={styles.inputfield}
              // secure={false}
              // onChangeText={handleChangeshopaddress}
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
              // secure={false}
              // onChangeText={handleChangeshopaddress}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Text style={{fontSize: 18, color: 'black'}}>Quantity type</Text>
            <CheckBox
              center
              uncheckedIcon="circle-o"
              checkedIcon="dot-circle-o"
              checked={kg}
              title="kG"
              onPress={quantitykg}
            />
            <CheckBox
              center
              uncheckedIcon="circle-o"
              checkedIcon="dot-circle-o"
              checked={dozn}
              title="Dozn"
              onPress={quantitydozn}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Text style={{fontSize: 18, color: 'black'}}>Category</Text>
            <CheckBox
              center
              uncheckedIcon="circle-o"
              checkedIcon="dot-circle-o"
              checked={Fruit}
              title="Fruit"
              onPress={categoryfr}
            />
            <CheckBox
              center
              uncheckedIcon="circle-o"
              checkedIcon="dot-circle-o"
              checked={Vegitable}
              title="Vegitable"
              onPress={categoryve}
            />
          </View>

          <PrimaryButton
            txt="Upload"
            // nav="ShopKeeperdashboardScreen"
            onPress={handleupload}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductUpload;
