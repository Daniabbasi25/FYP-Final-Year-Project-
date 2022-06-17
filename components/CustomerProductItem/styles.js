import { StyleSheet,Dimensions } from "react-native";
const {width,height}=Dimensions.get('screen');
const styles=StyleSheet.create({
    container:{
        // backgroundColor:'red',
        padding: 10, 
        margin: 10,
        width:width/2.5,
        height:height/3.2,
        // alignItems:'center',
        // justifyContent:'center',
        borderRadius:20,
        
    },
    prodcutimg:{
        width:width/2.7,
        height:height/5.5,
       
    },
    texdata:{
        // flexDirection:'row',
        justifyContent:'space-between',
        width:width/2.8,
        alignSelf:'center',
        alignItems:'center',
        color:'#000'
    },
    editbutton:{
        backgroundColor:'green',
        width:width/2.6,
        alignSelf:'center',
        alignItems:'center',
        borderRadius:20,
        padding:4,
        marginTop:1,
        marginBottom:1,
        
        
    },
    deletebutton:{
        backgroundColor:'darkred',
        width:width/2.6,
        alignSelf:'center',
        alignItems:'center',
        borderRadius:20,
        padding:4,
        marginTop:1,
    },
});
export default styles;