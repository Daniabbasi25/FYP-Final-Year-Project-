import { StyleSheet,Dimensions } from "react-native";
const {width,height} =Dimensions.get("screen");

const styles=StyleSheet.create({
   button:{
       backgroundColor:'#FEC000',
       width: width/1.3,
       height:45,
       alignItems:'center',
       justifyContent:'center',
       borderRadius:45,
       marginTop:20
   },
   buttontext:{
       color:'#fff',
       fontSize:24
   }
});
export default styles;