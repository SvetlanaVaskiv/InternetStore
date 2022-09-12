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
  console.log(password);
  try {
    const { data } = await $host.post("api/user/login", { email, password });
    localStorage.setItem("token", data.token);
    return jwt_decode(data.token);
  } catch (error) {
    console.log(error)
    alert("Your email or password isn't in the database. Please, go to sign up");
  }
};

export const check = async () => {
  let decodedToken;
 
    const { data } = await $authHost.get("api/user/auth");
    console.log(data);

    if (data.token) {
      localStorage.setItem("token", data.token);
    }
    return (decodedToken = jwt_decode(data.token));

};
