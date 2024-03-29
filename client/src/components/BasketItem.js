import { useContext } from "react";
import { Button, Card, Col, Image } from "react-bootstrap";
import { Context } from "..";
import star from "../assets/rating.png";
import { updateCount } from "../http/basketApi";
import jwt_decode from "jwt-decode";
import { useParams } from "react-router-dom";

const BasketItem = ({ device }) => {
  const {user}= useContext(Context);
  const { id } = useParams();
  const { basket } = useContext(Context);
  const basketId = id;
  const addMoreDev = () => {
    const  id  = user.id;

    const up = updateCount(basketId, basket.count, id);
  };

  return (
    <Col className="mt-3 d-flex flex-column justify-content-center">
      <Card className="device-cnt">
        <Image
          className="image"
          src={process.env.REACT_APP_API_URL + device.img}
        />
        <div className="txt-device">
          <div>{device.name}</div>

          <Image className="smStar" src={star} />
          <Button onClick={addMoreDev}>CLLICK</Button>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default BasketItem;
