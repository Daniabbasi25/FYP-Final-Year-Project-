import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';


const TestMap = () => {
  return (
    <View style={{flex:1}}>
      <MapView
      style={styles.map}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
    
<Marker coordinate={{
  latitude: 37.78825,
  longitude: -122.4324,
}}
/>

      
 
  {/* 
     <MapView
      region={this.state.region}
      onRegionChange={this.onRegionChange}
    />
  */}
    </View>
  )
}

export default TestMap

const styles = StyleSheet.create({

    map: {
        ...StyleSheet.absoluteFillObject,
  },
})