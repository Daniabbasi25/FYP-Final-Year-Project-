import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#000',
        justifyContent:'center',
        alignItems:'center',
        
    },
    heading:{
        color:'#FEC000',
        fontSize:50,
        fontWeight:'800',
        marginBottom:20
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode:'cover',
        position:'absolute',
        rotation:180
      },
});
export default styles;