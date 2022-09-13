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
    console.warn("registration error", error);
  }
};

export const login = async (email, password) => {
  console.log(password);
  try {
    const { data } = await $host.post("api/user/login", { email, password });
    localStorage.setItem("token", data.token);
    return jwt_decode(data.token);
  } catch (error) {
    console.warn("login error", error);
  }
};

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  console.log(data);

  if (data.token) {
    localStorage.setItem("token", data.token);
  }
  return jwt_decode(data.token);
};
