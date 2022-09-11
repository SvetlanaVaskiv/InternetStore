import { useContext, useEffect } from "react";
import Basket from "../components/Basket";
import { getBasketDevice } from "../http/basketApi";
import jwt_decode from "jwt-decode";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const BasketPage = observer(() => {
  const { basket } = useContext(Context);
  const { user } = useContext(Context);

  useEffect(() => {
    const id  = user.id;
    getBasketDevice(id).then((res) => {
      basket.setBasket(res.rows);
      basket.setTotalCount(res.count);
    });
  }, [basket, user.id]);

  return <Basket />;
});

export default BasketPage;
