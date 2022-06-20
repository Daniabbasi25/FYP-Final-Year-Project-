import { StyleSheet,Dimensions } from "react-native";
const {width,height}=Dimensions.get('screen');
const styles=StyleSheet.create({
    heading:{
        fontSize:25,
        fontWeight:'bold',
        color:'#000',
        marginBottom:20
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
        justifyContent:'space-between',
        alignItems:'center'
    },
    button:{
        padding:20,
        backgroundColor:'green',
        borderRadius:10
    }
});
export default styles;