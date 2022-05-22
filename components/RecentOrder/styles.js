import { StyleSheet,Dimensions } from "react-native";
const {width,height}=Dimensions.get('screen');
const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:height/height/2
    },
    flatList: {
        height: height/3,
        backgroundColor: '#fff',
        flexGrow: 0
      }
   
});
export default styles;