import { StyleSheet,Dimensions } from "react-native";
const {width,height}=Dimensions.get('screen');
const styles=StyleSheet.create({
    container:{
        // backgroundColor:'red',
        padding: 10, 
        margin: 10,
        width:width/2.5,
        height:height/3.8,
        // alignItems:'center',
        // justifyContent:'center',
        borderRadius:20,
        
    },
    prodcutimg:{
        width:width/2.7,
        height:height/5,
       
    },
    texdata:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:width/2.8,
        alignSelf:'center',
        alignItems:'center',
        color:'#000'
    },
});
export default styles;