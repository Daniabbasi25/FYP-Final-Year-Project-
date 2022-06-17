import { StyleSheet,Dimensions } from "react-native";
const {width,height}=Dimensions.get('screen');
const styles=StyleSheet.create({
    prodcutimg:{
        width:width/1,
        height:height/2,
    },
    container:{
        backgroundColor:'#fff',
        height:height/2.5,
        position:'absolute',
        top:height/2.5,
        width:width/1,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,

    },
    productname:{
        // marginLeft:30,
        // marginTop:30,
        fontSize:25,
        fontWeight:"bold",
        color:'#000'
    },
    nameflex:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:20,
        // backgroundColor:'black',
        marginTop:10
    },
    conterbox:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'gray'
    },
    button:{
        backgroundColor:'orange',
        borderRadius:50,
        color:'#fff'
    },
    productprice:{
// marginTop:30,
    fontSize:25,
    fontWeight:"bold",
    color:'#000',
    marginTop:20,
    marginLeft:50
    },
    
    Addtocartbutton:{
        backgroundColor:'green',
        marginTop:100,
        width:width/3.5,
        alignSelf:'center',
        padding:10,
        borderRadius:50,
    },
    buttontext:{
        fontSize:18,
        color:'#fff',

    },

});
export default styles;