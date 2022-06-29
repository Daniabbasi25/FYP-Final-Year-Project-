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
    flatlistcontainermodel:{
        height:height/2.5,
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
    mybutton:{
        padding:15,
        backgroundColor:'darkorange',
        borderRadius:50
    },

// 
centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "darkorange",
    borderRadius: 10,
    padding: 1,
    alignItems: "center",
    shadowColor: "#000",
    width:width/1.1,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "red",
    margin:10
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  detailcard:{
    width:width/1.5,
    // flexDirection:'row',
    // borderWidth:1,
    // backgroundColor:'red'
    // backgroundColor:'red',
    padding:0,
    marginTop:0,
  }
  ,subdetail:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  assignorder:{
    backgroundColor:'darkgreen',
    padding:10,
    color:'#fff'
  }




});
export default styles;