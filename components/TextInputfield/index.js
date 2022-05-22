import { TextInput,Dimensions } from 'react-native'
import React from 'react'
import styles from './styles'
const {width,height} =Dimensions.get("screen")
const TextInputfield = props => {
  // const [text, onChangeText] = React.useState(null);
  // const placeholder=props.placeholder;
  // const secure=props.secure;
  const {onChangeText,text,placeholder,secure}=props;

  return (
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
        secureTextEntry={secure}
      />
  )
}

export default TextInputfield