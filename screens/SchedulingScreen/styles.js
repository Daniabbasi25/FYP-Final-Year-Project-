import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
 heading:{
    fontSize:25,
    fontWeight:'bold',
    color:'#000',
    marginBottom:10
 },
 subheading:{
    fontSize:15,
    color:'#000'
 }
 ,
 maincontainer:{
    // height:height/1.1
//    marginLeft:10,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center'
 },
 lowerview:{
   justifyContent:'center',
   alignItems:'center',
   marginTop:20
 },
 orderbutton:{
   alignSelf:'center',
   backgroundColor:'green',
   color:'#fff',
   fontSize:18,
   padding:10
 }
});
export default styles;
