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
    backgroundColor: '#E1D3A6',
    marginTop: 20,
  },
  icon: {
    width: 30,
    height: 30,
    color: 'black',
  },
  maincontainer: {
    alignItems: 'center',
  },
});
export default styles;
