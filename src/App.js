import { observer } from "mobx-react-lite";
import { BrowserRouter} from "react-router-dom";
import { Context } from "./index";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

import { useContext, useEffect, useState } from "react";
import { check } from "./http/userApi";
import {  Spinner } from "react-bootstrap";
import "./index.css";
const App = observer(() => {
  const { user } = useContext(Context);
  const [loadind, setLoading] = useState(true);
  useEffect(() => {
    check()
      .then((data) => {
        if (data){
          user.setUser(true);
          user.setIsAuth(true);
        } else {
          user.setIsAuth(false);
        }
      })
      .catch((e) => {
        console.log(e.response.data.message);
      })
      .finally(() => setLoading(false));
  }, [user]);
  if (loadind) {
    return <Spinner animation="grow" />;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
