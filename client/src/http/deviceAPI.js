import { $authHost, $host } from "./index";
import { check } from "./userApi";


export const fetchOneBasket = async (id) => {
  
  const { data } = await $host.get("api/basket/" + id);
        return data;
}

export const addDevice = async (id, user)=>{
const {data} = await $host.post("api/basketdevice", id , user)
return data
}
export const createType = async (type) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const createBrand = async (brand) => {
  const { data } = await $authHost.post("api/brand", brand);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};

export const createDevice = async (device) => {
  const { data } = await $authHost.post("api/device", device);
  return data;
};

export const fetchDevices = async (typeId, brandId, page, limit) => {
    try{
        const { data } = await $host.get("api/device", {
            params: {
              typeId,
              brandId,
              page,
              limit,
            } });
            return data;
    } catch (error) {
throw new Error("Requested page is not available ; " + error.message);
    }

};

export const fetchOneDevice = async (id) => {
    try{
        const { data } = await $host.get("api/device/" + id);
        return data;
    }
  catch (error) {
    throw new Error("Requested page is not available ; " + error.message);

  }
};
export const updateRating = async (id, rating) => {
    const { data } = await $host.put("api/device/" + id , {rating});
    return data;
 
}
