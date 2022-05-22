import { StyleSheet,Dimensions } from "react-native";
const {width,height}=Dimensions.get('screen');
const styles=StyleSheet.create({
    container:{
        width:width,
        alignItems:'center',
        justifyContent:'center', 
    },
   
});
export default styles;