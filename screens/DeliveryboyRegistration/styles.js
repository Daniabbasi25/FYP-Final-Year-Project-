import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#FEC000',
    fontSize: 50,
    fontWeight: '800',
    marginBottom: 5,
    textAlign: 'center',
  },
  as: {
    fontSize: 20,
    textAlign: 'center',
  },
  input: {
    width: width / 1.3,
    color: '#707070',
    height: 45,
    margin: 15,
    padding: 10,
    borderRadius: 37,
    backgroundColor: '#FFFFFF',
    elevation: 20,
  },
  scrollview: {},
});
export default styles;
