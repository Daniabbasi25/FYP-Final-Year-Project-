import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const PrimaryButton = props => {
  const {txt, nav, onPress} = props;

  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        // onPress={()=>navigation.navigate(navscreen)}
        onPress={onPress}>
        <Text style={styles.buttontext}>{txt}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
