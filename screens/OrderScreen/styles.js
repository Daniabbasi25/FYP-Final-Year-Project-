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
       
        backgroundColor:'darkorange',
        borderRadius:20,
      
      
    },
    notactive:{
        // backgroundColor:''
        color:'#748A9D'
    },
    white:{
        color:'#fff'
    }
});
export default styles;
