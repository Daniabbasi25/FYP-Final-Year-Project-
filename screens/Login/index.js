import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import BackgroundImage from '../../components/BackgroundImage';
import TextInputfield from '../../components/TextInputfield';
import PrimaryButton from '../../components/PrimaryButton';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import API from '../../API';
const image = require('../../assets/images/splash.jpg');

const Login = ({navigation}) => {
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [result, shopkeeperdata] = React.useState([]);
  const handleLogin = () => {
    fetch(
      `http://${API}/API/api/User/Login?email=${email}&password=${password}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      // .then(resp => {
      //   alert('the response is' + resp);
      //   // shopkeeperdata(resp);
      //   // alert('the reslt is' + result);
      // })
      .then(resp => {
        // if (condition) {
        // }
        if (resp.Role == 'seller') {
          alert(' shopkeeper Login successfull' + resp);
          // console.log(data);
          navigation.navigate('ShopKeeperdashboardScreen', resp);
        } else if (resp.Role == 'customer') {
          alert(' Customer Login successfull' + resp);
          navigation.navigate('CustomerDashboard');
        } else {
          alert(' Delivery Boy Login successfull' + resp);
        }
      })
      .catch(err => {
        alert(err.message);
      });
  };

  const handleChangeusername = e => {
    setEmail(e);
  };
  const handleChangeemail = e => {
    setPassword(e);
  };
  return (
    <View style={styles.container}>
      <BackgroundImage />

      <Text style={styles.heading}>Login</Text>
      <View>
        <TextInputfield
          onChangeText={handleChangeusername}
          placeholder="UserName"
          secure={false}
        />
        <TextInputfield
          onChangeText={handleChangeemail}
          placeholder="password"
          secure={true}
        />
      </View>
      <PrimaryButton
        txt="Login"
        nav="ShopKeeperdashboardScreen"
        onPress={handleLogin}
      />
      {/* <TouchableOpacity onPress={handleLogin}>
        <Text style={{color: '#FEC000'}}>Login</Text>
      </TouchableOpacity> */}
      <Text style={{marginTop: 23}}>Don't have any account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('RegisterAs')}>
        <Text style={{color: '#FEC000'}}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
