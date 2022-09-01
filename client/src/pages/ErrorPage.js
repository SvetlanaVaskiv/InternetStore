import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import { Context } from "../index";
import {Card, Button } from "react-bootstrap";

const ErrorPage = ({ error }) => {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const goLog = () => {
    user.setError(false);
    navigate(LOGIN_ROUTE);
  };
  return (
    <Card
className="d-flex flex-row  justify-content-center"
border="primary"
text="primary"
>
<Card.Body className="p-0 ps-1 align-self-center">

<i>Something went wrong </i>😭
      <span>{error} <b>Go to shopping</b> </span></Card.Body>

      <Button onClick={goLog} className="removeChoise">

  <span className="span">Log In</span>
</Button>


</Card>
  );
};

export default ErrorPage;
