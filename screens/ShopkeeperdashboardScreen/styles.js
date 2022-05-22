import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width / 1.1,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
});
export default styles;
