import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Divider} from 'react-native-elements';
const ShopkeeperBottomTab = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View>
          {/* <Icon name="home" size="30" color="black" /> */}
          <Icon name="home" size={40} color="orange" />
          {/* <Text>Home</Text> */}
        </View>
      </TouchableOpacity>
      <View>
        {/* <Icon name="home" size="30" color="black" /> */}
        <Icon name="plus-circle" size={80} color="orange" />
        {/* <Text>Home</Text> */}
      </View>
    </View>
  );
};

export default ShopkeeperBottomTab;
