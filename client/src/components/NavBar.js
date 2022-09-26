import { useContext } from "react";
import { Context } from "../index";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  ROOT_ROUTE,
  SHOP_ROUTE,
} from "../utils/consts";
import { observer } from "mobx-react-lite";
import { fetchOneBasket } from "../http/basketApi";
import "react-toastify/dist/ReactToastify.css";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const { device } = useContext(Context);
  const navigate = useNavigate();

  const click = () => {
    device.removeSelectedBrand(device.selectedBrand.name);
    device.removeSelectedType(device.removeSelectedType.name);
  };
  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("token");
  };
  const getBasket = async () => {
    const id = user.id;
    const basketId = await fetchOneBasket(id);
    navigate(BASKET_ROUTE + "/" + basketId.id);
  };
  const goToAdminPage=() => {
    navigate(ADMIN_ROUTE);
  }
  console.log(user.id);
  console.log(user.role);
  return (
    <Navbar bg="dark" variant="dark" className="layoutNavbar">
      <Container className="flex-wrap">
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE} onClick={click}>
          Buy Device{" "}
        </NavLink>

        {user.isAuth ? (
          <Nav className="ml-auto">
            {user.role === "ADMIN" ? (
              <Button variant={"outline-light"} onClick={() => goToAdminPage}>
                Admin panel
              </Button>
            ) : (
              <Button
                variant={"outline-light"}
                onClick={getBasket}
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
              Authorization
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
