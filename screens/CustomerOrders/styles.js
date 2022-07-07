import { StyleSheet,Dimensions } from "react-native";
const {width,height}=Dimensions.get('screen');
const styles=StyleSheet.create({
    maincontainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'

    },
    pronamecontainer:{
        // backgroundColor:'gray'
    },
    proname:{
        color:'#000',
        fontSize:18,
        fontWeight:'bold'
    },
    priceperkg:{
        color:'gray',
    },
    iconcontainer:{
        alignItems:'center',
        justifyContent:'space-between',
    },
    itemtotal:{
        marginTop:20,
    },
    prodcutimg:{
        width:width/4,
        height:height/8
    },
    flatlistcontainer:{
        // backgroundColor:'red',
        height:height/1.47
    },
    lowercontainer:{
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'rgba(0, 0, 0, 0)'
    },
    checkoutbutton:{
        backgroundColor:'green',
        color:'#fff',
        paddingHorizontal:20,
        paddingVertical:8,
        fontSize:18,
        borderRadius:50
    },
    empty:{
        color:'#000',
        position:'absolute',
        width:width,
        height:height/2,
       
        justifyContent:'center',
        alignItems:'center'

    }

});
export default styles;