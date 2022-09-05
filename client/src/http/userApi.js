import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
  try {
    const { data } = await $host.post("api/user/registration", {
      email,
      password,
      role: "USER",
    });
    localStorage.setItem("token", data.token);
    return jwt_decode(data.token);
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const login = async (email, password) => {
  try {
    const { data } = await $host.post("api/user/login", { email, password });
    localStorage.setItem("token", data.token);
    return jwt_decode(data.token);
  } catch (error) {
    alert(error.message);
  }
};

export const check = async () => {
  let decodedToken;

  try {
    const  data  = await $authHost.get("api/user/auth");
    console.log(data)
    if(data)
    localStorage.setItem("token", data.token);
    decodedToken = jwt_decode(data.token);
  } catch (err) {
    return new Error("Invalid token. Please try again later");
  }

  return decodedToken;
};
