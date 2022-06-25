import { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap"
import { useParams } from "react-router-dom";
import Basket from "../components/Basket";
import { addDevice, fetchOneBasket, getBasketDevice } from "../http/deviceAPI"
import jwt_decode from "jwt-decode";
import { Context } from "..";
import { observer } from "mobx-react-lite";


const BasketPage = observer(()=> {
  const {basket} = useContext(Context);
  const token= localStorage.getItem("token");


 
 

useEffect(() => {
    const {id}=jwt_decode(token)
  getBasketDevice(id).then((res)=>{
    basket.setBasket(res.rows)
    basket.setTotalCount(res.count)
   
  });
  },[basket])
 
    return (
      <Basket/>
    )
})

export default BasketPage