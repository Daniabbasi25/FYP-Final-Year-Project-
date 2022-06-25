import React, { useState } from 'react'
import { Button,Text, TouchableOpacity, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import {  CheckBox } from 'react-native-elements'
import { Card } from 'react-native-shadow-cards'
import API from '../../API'
import styles from './styles'

const SchedulingScreen= ({ route, navigation }) => {
  const {total,address}=route.params
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [ischecked, setchecked] = useState(true);
  const [ismonday, setmonday] = useState(true);
  const [istuesday, settuesday] = useState(true);
  const [iswednessday, setwednessday] = useState(true);
  const [isthursday, setthursday] = useState(true);
  const [isfriday, setfriday] = useState(true);
  const [issatureday, setsaturday] = useState(true);
  const [finaldays, setfinaldays] = useState([]);
  const [issunday, setsunday] = useState(true);
  const everyday = () => {
    if(ischecked)
    {
      setchecked(false)
      setmonday(false)
      settuesday(false)
      setwednessday(false)
      setthursday(false)
      setfriday(false)
      setsaturday(false)
      setsunday(false)
    }
    else{
      setchecked(true)
      setmonday(true)
      settuesday(true)
      setwednessday(true)
      setthursday(true)
      setfriday(true)
      setsaturday(true)
      setsunday(true)
      
    }
  };
  const monday = () => {
    if(ismonday)
    {
      setmonday(false)
    }
    else{
      setmonday(true)
    }
  };
  const tuesday = () => {
    if(istuesday)
    {
      settuesday(false)
    }
    else{
      settuesday(true)
    }
  };
  const Wednessday = () => {
    if(iswednessday)
    {
      setwednessday(false)
    }
    else{
      setwednessday(true)
    }
  };
  const thursday = () => {
    if(isthursday)
    {
      setthursday(false)
    }
    else{
      setthursday(true)
    }
  };
  const friday = () => {
    if(isfriday)
    {
      setfriday(false)
    }
    else{
      setfriday(true)
    }
  };
  const saturday = () => {
    if(issatureday)
    {
      setsaturday(false)
    }
    else{
      setsaturday(true)
    }
  };
  const sunday = () => {
    if(issunday)
    {
      setsunday(false)
    }
    else{
      setsunday(true)
    }
  };

// handle order
const handleorder=()=>{
  let days="";
  var dayarry=[];
  
   if(ismonday){
    days=days.concat("Monday,")
    dayarry.push('Monday')
  }
  if(istuesday){
     days=days.concat("Tuesday,")
    dayarry.push('Tuesday')
  }
   if(iswednessday){
    dayarry.push('Wednessday')
    days=days.concat("Wednesday,")
  }
   if(isthursday){
    dayarry.push('Thursday')
    days=days.concat("Thursday,")
  }
  if(isfriday){
    dayarry.push('Friday')
    days=days.concat("Friday,")
  }
  if(issatureday){
    days=days.concat("Saturday,")
    dayarry.push('saturday')
  }
 if(issunday){
    days=days.concat("Sunday")
    dayarry.push('Sunday')
  }
  if(!ismonday&&!istuesday&&!iswednessday&&!isthursday&&!isfriday&&!issatureday&&!issunday){
    alert("chose at least 1 day")
  }
  setfinaldays(dayarry);
  console.log("days=",JSON.stringify(finaldays))
  
  if((ismonday||istuesday||iswednessday||isthursday||isfriday||issatureday||issunday) &&date)
  {
    const data = new FormData();
    data.append('cusid', global.userId);
    data.append('grandtotal', total);
    data.append('daddress', address);
   data.append('endingdate', `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`);
    // data.append('days', JSON.stringify(finaldays));
    data.append('days',days);
 
  fetch(`http://${API}/API/api/Order/ScheduleOrder`, {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'multipart/form-data ',
    },
  })
    .then(response => response.json())
    .then(resp => {
      alert('successfully Place Order' + resp);
      navigation.navigate('CustomerDashboard')
    })
    .catch(err => {
      alert(err);
    });
  }
  else{
    alert("kindly select date and atleast any 1 day")
  }
}


  return (
    <>
    <Card style={styles.maincontainer}>
      <Text style={styles.heading}>
        Schedule Order
      </Text>
      <Card>
      <Text style={styles.subheading}>
       Select Days
      </Text>
        <CheckBox title="Every Day" checked={ischecked} onPress={everyday} />
        <View />
       
        <CheckBox title="Monday"  checked={ismonday} onPress={monday} />
        <CheckBox title="Tuesday"  checked={istuesday} onPress={tuesday} />
        <CheckBox title="Wednessday"  checked={iswednessday} onPress={Wednessday} />
        <CheckBox title="Thursday"  checked={isthursday} onPress={thursday} />
        <CheckBox title="Friday"  checked={isfriday} onPress={friday} />
        <CheckBox title="Saturday"  checked={issatureday} onPress={saturday} />
        <CheckBox title="Sunday"  checked={issunday} onPress={sunday} />
      </Card>
      <Button title="Ending Date" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        format="YYYY-MM-DD"
        minimumDate={new Date("2021-12-31")}
       
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </Card>
    <View style={styles.lowerview}>
      <TouchableOpacity onPress={handleorder}>
        <Text style={styles.orderbutton}>
          PLace Order
        </Text>
      </TouchableOpacity>
    </View>
    </>
  )
}
export default SchedulingScreen;