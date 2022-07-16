import { StyleSheet, Text, View } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'

const Testrating = () => {
   const  ratingCompleted=(rating)=> {
        console.log("Rating is: " + rating)
      }
  return (
    <View>
     <AirbnbRating />

<AirbnbRating
  count={11}
  reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
  defaultRating={11}
  size={20}
/>

<Rating
  showRating
  onFinishRating={ratingCompleted}
  style={{ paddingVertical: 10 }}
  ratingCount={5}
/>

<Rating
  type='heart'
  ratingCount={3}
  imageSize={60}
  showRating
  onFinishRating={ratingCompleted}
/>

<Rating
  type='custom'
//   ratingImage={WATER_IMAGE}
  ratingColor='#3498db'
  ratingBackgroundColor='#c8c7c8'
  ratingCount={10}
  imageSize={30}
  onFinishRating={ratingCompleted}
  style={{ paddingVertical: 10 }}
/>
<Icon name="star" size={20} color="orange" />
    </View>
  )
}

export default Testrating

const styles = StyleSheet.create({})