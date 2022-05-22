import {View, Text, Image, Button} from 'react-native';
import React from 'react';
import styles from './styles';
import {Card} from 'react-native-shadow-cards';
// import {Button} from 'react-native-elements/dist/buttons/Button';
import PrimaryButton from '../../components/PrimaryButton';

const ShopkeeperProfileScreen = () => {
  return (
    <View style={styles.maincontainer}>
      <Card styles={styles.Card}>
        <Text style={styles.headertext}>Profile</Text>
        <Image
          source={{uri: 'https://i.pravatar.cc/300?img=65'}}
          style={styles.profilepicture}
        />
        <Text style={styles.username}>Haris</Text>
        <Text style={styles.role}>Shopkeeper</Text>
        <View style={styles.detailcontainer}>
          <Text style={styles.bold}>Full Name</Text>
          <Text style={styles.light}>Haris Abbasi</Text>
          <Text style={styles.bold}>Address</Text>
          <Text style={styles.light}>house#2 street#3 i8 isb</Text>
          <Text style={styles.bold}>Email</Text>
          <Text style={styles.light}>abbasidani82@gmail.com</Text>
          <Text style={styles.bold}>Shop Name</Text>
          <Text style={styles.light}>Af Fresh Fruite & Vegitable</Text>
        </View>
        <Button
          // txt="SignOut"
          // nav="Login"
          // onPress={handleLogin}
          title="Edit"
        />
        {/* <Button
          // txt="SignOut"
          // nav="Login"
          // onPress={handleLogin}
          title="Edit"
          style={styles.buttonedit}
        /> */}
      </Card>
    </View>
  );
};

export default ShopkeeperProfileScreen;
