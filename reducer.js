import React,{useReducer} from "react";
import API from "./API";
const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
export function handleClick() {
    forceUpdate();
  }
export const getDataUsingGet = async () => {
    //GET request

    try {
      const apiurl = `http://${API}/API/api/CartItem/Allcart?customerid=${global.userId}`;
      const response = await fetch(apiurl);
      const json = await response.json();
      console.log('hiii' + JSON.stringify(json));
      productlist(json);
      calculatethetotal(json);
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  };