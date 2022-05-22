import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    // backgroundColor:'#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Card: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headertext: {
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 20,
    color: 'black',
  },
  profilepicture: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
  },
  username: {
    color: 'black',
    alignSelf: 'center',
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  role: {
    alignSelf: 'center',
  },
  detailcontainer: {
    backgroundColor: '#F0F3F8',
    marginLeft: 15,
    marginRight: 15,
    padding: 30,
    marginBottom: 30,
  },
  bold: {
    color: '#000',
    fontWeight: 'bold',
  },
  buttonedit: {
    margin: 30,
  },
});
export default styles;
