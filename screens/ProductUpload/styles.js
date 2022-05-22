import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    // justifyContent: 'center',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 2,
    height: height / 6,
    backgroundColor: '#EEF4FF',
    marginTop: 20,
  },
  icon: {
    color: '#B1BCC5',
  },
  maincontainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
export default styles;
