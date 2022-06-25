import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import { Context } from "../index";

const ErrorPage = ({ error }) => {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const goLog = () => {
    user.setError(false);
    navigate(LOGIN_ROUTE);
  };
  return (
    <div>
      <p>Something went wrong 😭</p>
      <span>Here's the error:{error} </span>
      <button onClick={goLog}>GGGGGGG</button>
    </div>
  );
};

export default ErrorPage;
