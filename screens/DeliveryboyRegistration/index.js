import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
  } from 'react-native';
  import React from 'react';
  import BackgroundImage from '../../components/BackgroundImage';
  import styles from './styles';
  import TextInputfield from '../../components/TextInputfield';
  import PrimaryButton from '../../components/PrimaryButton';
  import Login from '../Login';
  import API from '../../API';
  import ShopKeeperdashboardScreen from '../ShopkeeperdashboardScreen';
  import CustomerDashboard from '../CustomerProduct';
  const DeliveryboyRegistration = ({navigation}) => {
    const [name, setName] = React.useState('');
    const [shopname, setshopname] = React.useState('');
    const [shopaddress, setshopaddress] = React.useState('');
    const [shopphoneno, setshopephoneno] = React.useState('');
    const [bikenmber, setbikenumber] = React.useState('');
    const [shopemail, setshopemail] = React.useState('');
    const [shoppassword, setshoppassword] = React.useState('');
    const [userid, setuserid] = React.useState();
  
    const handleChange = e => {
      setName(e);
    };
  
    const handlechangeshopname = e => {
      setshopname(e);
    };
  
    
  
    const handleChangeshopemail = e => {
      setshopemail(e);
    };
  
    const handleChangeshoppassword = e => {
      setshoppassword(e);
    };
  
    const hendlephonenumber = e => {
      setshopephoneno(e);
    };
  
    const handlebikenumber = e => {
      setbikenumber(e);
    };
  
    const handleSubmit = () => {
      if (
        name.trim() &&
        shopname.trim() &&
        //shopaddress.trim() &&
        shopemail.trim() &&
        shoppassword.trim()&&
        bikenmber.trim()&&
        shopphoneno.trim()
      ) {
        const requestoption2 = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            Email: shopemail,
            password: shoppassword,
            Role: 'delivery',
          }),
        };
        // let loginuserid;
        fetch(`http://${API}/API/api/User/AddUser`, requestoption2)
          .then(response => response.json())
          .then(resp => {
            alert(resp);
            global.userId = resp;
            setuserid(resp);
            alert('user id is ' + resp);
            fetch(`http://${API}/API/api/User/insertdeliveryboy`, {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                deliveryboy_name: name,
                deliveryboy_address: shopname,
                deliveryboy_profilepicturename: null,
                deliveryboy_bikeno: bikenmber,
                deliveryboy_phoneno: shopphoneno,
                userid: resp,
              }),
            })
              .then(response => response.json())
              .then(resp => {
                alert('Sign Up Successfull' + resp);
                navigation.navigate('DeliveryBoyDashboard');
              })
              .catch(err => {
                alert(err.message);
              });
          })
          .catch(err => {
            alert(err.message);
          });
        console.log('========user id====' + userid);
        // const requestOptions =;
      } else {
        alert('Plz fill complete form');
      }
    };
    return (
      <View style={styles.container}>
        <BackgroundImage />
        <ScrollView>
          <View style={{marginTop: 90}}>
            <Text style={styles.heading}>Register </Text>
          </View>
  
         
          <View>
            <TextInputfield
              onChangeText={handleChange}
              placeholder="Name"
              secure={false}
              // value={newText}
            />
  
            <TextInputfield
              placeholder="Email"
              secure={false}
              onChangeText={handleChangeshopemail}
            />
            <TextInputfield
              placeholder="Address"
              secure={false}
              onChangeText={handlechangeshopname}
            />
            <TextInput 
              placeholder="Contact Number" 
              keyboardType='phone-pad'
              onChangeText={hendlephonenumber}
              style={{  color: '#707070', height: 45,margin: 15, padding: 10,borderRadius: 37, backgroundColor: '#FFFFFF', elevation: 20,}}/>
            <TextInputfield
              placeholder="BikeNumber"
              secure={false}
              onChangeText={handlebikenumber}
            />
  
            <TextInputfield
              placeholder="Password"
              secure={true}
              onChangeText={handleChangeshoppassword}
            />
          </View>
  
          <PrimaryButton
            txt="Register"
            nav="ShopKeeperdashboardScreen"
            onPress={handleSubmit}
          />
          
          <Text style={{textAlign: 'center'}}>Already have Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate(Login)}>
            <Text style={{color: '#FEC000', textAlign: 'center'}}>Login</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };
  
  export default DeliveryboyRegistration;
  