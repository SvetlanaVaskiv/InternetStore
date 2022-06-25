import { useContext, useEffect } from "react";
import Basket from "../components/Basket";
import { getBasketDevice } from "../http/basketApi";
import jwt_decode from "jwt-decode";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const BasketPage = observer(() => {
  const { basket } = useContext(Context);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const { id } = jwt_decode(token);
    getBasketDevice(id).then((res) => {
      basket.setBasket(res.rows);
      basket.setTotalCount(res.count);
    });
  }, [basket, token]);

  return <Basket />;
});

export default BasketPage;
