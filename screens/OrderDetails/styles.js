import { StyleSheet,Dimensions } from "react-native";
const {width,height}=Dimensions.get('screen');
const styles=StyleSheet.create({
    heading:{
        fontSize:25,
        fontWeight:'bold',
        color:'#000',
        marginBottom:5,
        marginTop:20
    },
    productcontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10
    },
    producttext:{
        color:'#000',
        fontSize:18
    },
    orderinfo:{
        color:'#000',
        fontSize:15
    },
    flatlistcontainer:{
        height:height/3.2,
        // backgroundColor:''
    },
    addressbox:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:30
    },
    addresstext:{
        color:'#000',
        fontSize:18
    },
    addressinput:{
        backgroundColor:'#fff',
        borderWidth:1,
        width:width/2.3,
        height:height/20,
    },
    buttoncontainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    button:{
        padding:15,
        backgroundColor:'orange',
        borderRadius:50
    }
});
export default styles;