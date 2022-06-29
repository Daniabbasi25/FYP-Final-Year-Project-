import {View, Text} from 'react-native';
import React from 'react';
import styles from './Styles';
import BackgroundImage from '../../components/BackgroundImage';
import PrimaryButton from '../../components/PrimaryButton';

const RegisterAs = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BackgroundImage />
      <Text style={styles.heading}>Register As</Text>
      <PrimaryButton
        txt="Shopkeeper"
        //nav="Registration"
        onPress={() => navigation.navigate('Registration')}
      />
      <PrimaryButton
        txt="Delivery Boy"
        onPress={()=>navigation.navigate('DeliveryboyRegistration')}
      />
      <PrimaryButton
        txt="Customer"
        onPress={() => navigation.navigate('CustomerRegister')}
        // onPress={handleLogin}
      />
    </View>
  );
};

export default RegisterAs;
