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
      setimage(image.path);
      setisimage(true);
      imageupload(image.path);
    });
    // launchCamera(options?, callback);
    // =============================================================

    // ===============================================================
  };
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
  // for opening the gallery
  const onGallery = async () => {
    // alert('on Gallery');
    // ImagePicker.openPicker({
    //   width: 300,
    //   height: 400,
    //   cropping: true,
    // }).then(image => {
    //   console.log(image);
    //   imageupload(image.path);
    //   setisimage(true);
    //   setimage(image.path);
    // });
    const result = await launchImageLibrary(options);
    console.log(result);
    imageupload(result.assets[0]);
    setisimage(true);
    setimage(result.assets[0].uri);
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
      const data = new FormData();
      console.log(imagelink);
      data.append('image', {
        uri: imagelink.uri,
        type: imagelink.type,
        name: imagelink.fileName,
      });

      data.append('productname', productname);
      data.append('category', category);
      data.append('quantity', quantity);
      data.append('quantitytype', quanitytype);
      data.append('price', price);
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
          // navigation.navigate(ShopKeeperdashboardScreen,
          // {
          //   shopkeeperid: resp,
          // }
          // });
        })
        .catch(err => {
          alert(err);
        });
    }
  };
  const Desingimage = () => {
    if (isimage) {
      return (
        <View style={styles.image}>
          <Image
            // source={require('')}
            source={{uri: imagelink}}
            style={styles.mainimage}
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

          {/* <PrimaryButton
            txt="Upload"
            // nav="ShopKeeperdashboardScreen"
            onPress={handleupload}
          /> */}
          <TouchableOpacity style={styles.uploadbutton} onPress={handleupload}>
            <Text style={styles.buttontext}>Upload</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductUpload;
