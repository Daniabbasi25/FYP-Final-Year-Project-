import { StyleSheet,Dimensions } from "react-native";
const {width,height}=Dimensions.get('screen')
const styles=StyleSheet.create({
    container:{
        backgroundColor:'#F0F4F8',
        margin:2,
        padding:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:width/1.1,
        alignSelf:'center',
        padding: 10

    },
    icon:{
        
        backgroundColor:'#0FAB0A',
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50
     

    },
});
export default styles;