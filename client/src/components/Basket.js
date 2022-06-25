import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Row } from "react-bootstrap";

import { Context } from "..";
import BasketItem from "./BasketItem";

const Basket = observer(() => {
  const { basket } = useContext(Context);

  return (
    <Row>
      {basket.basket.map((device) => (
        <BasketItem key={device.id} device={device} />
      ))}
    </Row>
  );
});

export default Basket;
