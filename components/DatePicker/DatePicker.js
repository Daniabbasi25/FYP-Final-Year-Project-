 import moment from 'moment';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

export const DatePicker = ({onChangeText, value,placeholder='Hearing Date'}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
 
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = datetime => {
    console.log('date::', datetime);

    onChangeText(moment(datetime).format('YYYY-MM-DD HH:MM:SS'));
    hideDatePicker();
  };
  return (
    <View
      style={{
        width: '100%',
        marginLeft:-17
      }}>
      <TouchableOpacity
        style={[Styles.txtinput, {marginLeft:17}]}
        onPress={() => setDatePickerVisibility(true)}>
        <View style={Styles.cattl}>
          <Text>{value||placeholder}</Text>
        </View>
        <Icon  name="angle-down" size={20} color="black" />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={'datetime'}
        date={new Date()}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        // maximumDate={new Date(moment().subtract(18, 'years'))}
        // minimumDate={new Date(moment().subtract(50, 'years'))}
      />
    </View>
  );
};
const Styles = StyleSheet.create({

    txtinput: {
       
        width: 152,
    height: 35,
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 16,
    marginLeft:-10,
        flexDirection:'row',
        justifyContent:'space-around',   
        color: 'gray',
        backgroundColor: "#fff",
       
      },

});