import { observer } from "mobx-react-lite";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./index";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

import { useContext, useEffect, useState } from "react";
import { check } from "./http/userApi";
import { Spinner } from "react-bootstrap";
import "normalize.css";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
const App = () => {
  const { user } = useContext(Context);

  const [loadind, setLoading] = useState(true);
  const [errormsg, setErrormsg] = useState("");
  useEffect(() => {
    check()
      .then((data) => {
        console.log(data);
        if (data) {
          user.setUser(true);
          user.setIsAuth(true);
          user.setError(false);
        } else {
          user.setIsAuth(false);
        }
      })
      .catch((e) => {
        console.log(e, 'errror mmmmesss')
        user.setError(true);
        setErrormsg(" " + e.message);
      })
      .finally(() => setLoading(false));
  }, [user]);
  if (loadind) {
    return <Spinner animation="grow" />;
  }
  return (
    <BrowserRouter>
      <NavBar />
      {user.error && <ErrorPage error={errormsg} />}

      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
