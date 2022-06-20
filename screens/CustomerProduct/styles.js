import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
    uppercontainer:{
        borderColor:'black',
        backgroundColor:'#fff',
        borderWidth:1,
        borderRadius:20,
        marginHorizontal:10,
        marginTop:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'

    },
    textfield:{
       color:'#000',
    //    backgroundColor:'red',
       width:width/1.2

    },
    buttoncontainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:10,
        marginTop:5

    },
    button:{
        backgroundColor:'gray',
        padding:5,
    },
    flatlistbox:{
        height:height/1.5,
        alignItems:'center'
    }
});
export default styles;
