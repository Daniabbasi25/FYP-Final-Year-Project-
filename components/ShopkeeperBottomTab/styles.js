import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: width,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 40,
  },
});
export default styles;
