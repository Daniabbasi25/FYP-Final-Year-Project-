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
const CustomerRegister = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [shopname, setshopname] = React.useState('');
  const [shopaddress, setshopaddress] = React.useState('');
  const [shopphoneno, setshopephoneno] = React.useState('');
  const [shopemail, setshopemail] = React.useState('');
  const [shoppassword, setshoppassword] = React.useState('');
  const [userid, setuserid] = React.useState();

  const handleChange = e => {
    setName(e);
  };

  const handlechangeshopname = e => {
    setshopname(e);
  };

  const handleChangeshopaddress = e => {
    setshopaddress(e);
  };

  const handleChangeshopphoneno = e => {
    setshopephoneno(e);
  };

  const handleChangeshopemail = e => {
    setshopemail(e);
  };

  const handleChangeshoppassword = e => {
    setshoppassword(e);
  };

  const handleSubmit = () => {
    if (
      name.trim() &&
      shopname.trim() &&
      // shopaddress.trim() &&
      shopemail.trim() &&
      shoppassword.trim()
    ) {
      const requestoption2 = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          Email: shopemail,
          password: shoppassword,
          Role: 'customer',
        }),
      };
      // let loginuserid;
      fetch(`http://${API}/API/api/User/AddUser`, requestoption2)
        .then(response => response.json())
        .then(resp => {
          alert(resp);
          setuserid(resp);
          alert('user id is ' + resp);
          fetch(`http://${API}/API/api/User/insertCustomer`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              customer_name: name,
              customer_addres: shopname,
              shopkeeper_profilepicturaddress: null,

              userid: resp,
            }),
          })
            .then(response => response.json())
            .then(resp => {
              alert('Sign Up Successfull' + resp);
              navigation.navigate('CustomerDashboard');
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

        {/* <Text style={styles.as}>as </Text>
        <Text style={styles.heading}> Shopkeeper</Text> */}

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
            placeholder="Customer Address"
            secure={false}
            onChangeText={handlechangeshopname}
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
        {/* <TouchableOpacity onPress={handleSubmit}>
        <Text style={{color: '#FEC000'}}>register</Text>
      </TouchableOpacity> */}
        <Text style={{textAlign: 'center'}}>Already have Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(Login)}>
          <Text style={{color: '#FEC000', textAlign: 'center'}}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CustomerRegister;
