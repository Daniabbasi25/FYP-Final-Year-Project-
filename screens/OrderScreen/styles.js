import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
    buttoncontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        alignItems:'center',
        marginTop:20,
        // backgroundColor:'#fff'
    },
    text:{
        padding:10,
        margin:2,
         // elevation:10
      //  elevation: 5
    },
    activebutton:{
       
        backgroundColor:'orange',
        borderRadius:20,
      
      
    },
    notactive:{
        // backgroundColor:''
        color:'#748A9D'
    },
    white:{
        color:'#fff'
    },
    container:{
        backgroundColor:'#F0F4F8',
        margin:2,
        padding:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:width/1.1,
        alignSelf:'center',
    
        // height:height/10,

    },
    icon:{
        
        backgroundColor:'#0FAB0A',
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50
     

    },
  
    flatList: {
        height: height/1.43,
        backgroundColor: '#fff',
        flexGrow: 0
      },
      containerflist:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:height/height/2,
        marginTop:10
    },
});
export default styles;
