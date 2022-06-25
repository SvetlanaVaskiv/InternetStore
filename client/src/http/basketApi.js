import { $authHost, $host } from "./index";
import { check } from "./userApi";

export const getBasketDevice= async(id)=>{
  try {
    const {data}= await $host.get("api/basketdevice",{ params: id})
  return data;
  } catch (error) {
    console.log(error);
  }
  
}

export const fetchOneBasket = async (id) => {
  try {
    const { data } = await $host.get("api/basket/" + id);
    return data;
  } catch (error) {
    throw new Error("Requested page is not available ; " + error.message);

  }
 
}

export const updateCount = async (id, count, userId) => {
    const { data } = await $host.put("api/basketdevice/"  , {id,count, userId});
    return data;
 
}
