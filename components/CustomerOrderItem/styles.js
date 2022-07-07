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
    canclebutton:{
        backgroundColor:'red',
        padding:5
    },
    Rate:{
        backgroundColor:'orange',
        padding:5
    }
    ,
    Recive:{
        backgroundColor:'green',
        padding:5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
});
export default styles;