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
  const [errormsg, setErrormsg] = useState('');
 
  useEffect(() => {
    check()
      .then((data) => {
        if (data){
          user.setUser(true);
          user.setIsAuth(true);
        } else {
          user.setIsAuth(false);
        }
        user.setError(false)
      })
      .catch((e) => {
        user.setError(true);
        setErrormsg("Request failed ;  " +e.message)
      })
      .finally(() => setLoading(false));
  }, [user]);
  if (loadind) {
    return <Spinner animation="grow" />;
  }
console.log(user.error)
  return (
    <BrowserRouter>
    {user.error && <h6>{errormsg}</h6>} 
    <NavBar />
    <AppRouter />
     
    </BrowserRouter>
  );
});

export default App;
