import { useContext } from "react";
import { Context } from "../index";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  SHOP_ROUTE,
} from "../utils/consts";
import { observer } from "mobx-react-lite";
import jwt_decode from "jwt-decode";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const {device} = useContext(Context);
  const navigate = useNavigate();
 function decodetoken (){
   try {
     const token = jwt_decode(localStorage.getItem("token"));
     return token
   } catch (error) {
     console.warn("You need to authorised")
   }
 }
 const click= ()=>{
  device.removeSelectedBrand(device.selectedBrand.name)
  device.removeSelectedType(device.removeSelectedType.name)
 }
 const  token = decodetoken()
   const logOut = () => {
     user.setUser({});
     user.setIsAuth(false);
     localStorage.removeItem("token")
   };
  return (
    <Navbar bg="dark" variant="dark" className="layoutNavbar">
      <Container  className="flex-wrap">
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE} onClick={click}>
          Buy Device{" "}
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto">
            {token?.role === "ADMIN" ? (
              <Button
                variant={"outline-light"}
                onClick={() => navigate(ADMIN_ROUTE)}
              >
                Admin panel
              </Button>
            ) : (
              <Button
                variant={"outline-light"}
                onClick={() => navigate(BASKET_ROUTE)}
                className="ms-2"
              >
                Basket
              </Button>
            )}
            <Button
              variant={"outline-light"}
              onClick={() => logOut()}
              className="ms-2"
            >
              Exit
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              variant={"outline-light"}
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Authorisation
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
