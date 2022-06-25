import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
    buttoncontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        alignItems:'center'
    }
});
export default styles;
