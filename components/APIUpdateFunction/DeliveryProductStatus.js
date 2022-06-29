import API from "../../API";
import React, { useState } from "react";
const [updatestatus,setUpdatestatus]=useState();
const getDataUsingGet = async () => {
    //GET request
  
    try {
      const apiurl = `http://${API}/API/api/Order/deliveryorderget?id=${global.userId}`;
      const response = await fetch(apiurl);
      const json = await response.json();
      console.log('hiii' + JSON.stringify(json));
      setdata(json);
      
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  };
export default {getDataUsingGet,updatestatus,setUpdatestatus};
