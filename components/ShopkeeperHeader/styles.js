import { StyleSheet,Dimensions } from "react-native";
const {width,height}=Dimensions.get('screen');
const styles=StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        height:height/16,
        flexDirection:'row',
        // justifyContent:'cener',
        justifyContent:'flex-start',
        alignItems:'center',
        elevation:20,
        
    },
    profilepicture:{width: 50,
          height: height/18,
          borderRadius:width/16,
          marginRight:width/9,
          marginLeft:width/16,
        },
    name:{
        fontSize:18,
        fontWeight:'800',
        color:'#000',
    },
});
export default styles;