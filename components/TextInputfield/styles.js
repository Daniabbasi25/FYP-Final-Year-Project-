import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  input: {
    width: width / 1.3,
    color: '#707070',
    height: 45,
    margin: 15,
    // borderColor:'black',
    // borderWidth: 1,
    padding: 10,
    borderRadius: 37,
    backgroundColor: '#FFFFFF',
    elevation: 20,
  },
});
export default styles;
