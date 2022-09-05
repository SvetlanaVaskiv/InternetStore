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
  const { data } = await $authHost.get("api/user/auth");
  let decodedToken;
  if(data){
      localStorage.setItem("token", data.token);
         decodedToken = jwt_decode(data.token);
  }
  if (decodedToken) {
    return decodedToken;
  }
  return new Error("Invalid token. Please try again later");
};
