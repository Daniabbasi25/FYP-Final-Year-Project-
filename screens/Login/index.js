import {View, Text, TouchableOpacity, ActivityIndicator, Modal} from 'react-native';
import React, {useContext} from 'react';
import styles from './styles';
import BackgroundImage from '../../components/BackgroundImage';
import TextInputfield from '../../components/TextInputfield';
import PrimaryButton from '../../components/PrimaryButton';
import API from '../../API';
import UserContext from '../../Context/User/UserContext';
const Login = ({navigation}) => {
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const {userid, setuserid} = useContext(UserContext);
  let aa = 0;
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
      .then(resp => {
        
        if (resp.Role == 'seller') {
          alert(' shopkeeper Login successfull' + resp);
          // console.log(data);
          global.userId = resp.id;
          navigation.navigate('ShopKeeperdashboardScreen', resp);
        } else if (resp.Role == 'customer') {
          alert(' Customer Login successfull' + resp);
          global.userId = resp.id;
          navigation.navigate('CustomerDashboard');
        } else if (resp.Role == 'delivery') {
          alert(' Delivery Boy Login successfull' + resp);
          global.userId = resp.id;
          navigation.navigate('DeliveryBoyDashboard');
        }
        aa = resp.id;

        alert('user ID=' + userid + 'and real id =' + aa);
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

      <Text style={{marginTop: 23}}>Don't have any account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('RegisterAs')}>
        <Text style={{color: '#FEC000'}}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
