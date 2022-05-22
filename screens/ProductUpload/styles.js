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
    backgroundColor: '#F0F4F8',
    marginTop: 20,
  },
  icon: {
    color: '#B1BCC5',
  },
  maincontainer: {
    alignItems: 'center',
    backgroundColor: '#F2C83F',
    flex: 1,
  },
  inputcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    width: width,
    paddingLeft: 10,
    paddingRight: 10,
    // flex: 4,
    marginTop: 7,
  },
  inputfield: {
    backgroundColor: '#F0F4F8',
    borderRadius: 10,
    width: width / 1.5,
    height: height / 18,
    marginLeft: 4,
  },
  lable: {
    color: 'black',
    fontSize: 15,
  },
});
export default styles;
