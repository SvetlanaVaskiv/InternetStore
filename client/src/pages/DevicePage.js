import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
  Spinner,
} from "react-bootstrap";
import ratingIcon from "../assets/rating.png";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addDevice, fetchOneDevice, updateRating } from "../http/deviceAPI";
import ErrorPage from "./ErrorPage";
import star from "../assets/rating.png";
import { Context } from "..";

const DevicePage = () => {
  const [loadind, setLoading] = useState(true);
  const [device, setDevice] = useState({});
  const { id } = useParams();
  const { basket } = useContext(Context);
  let count = basket.count;
  useEffect(() => {
    fetchOneDevice(id)
      .then((data) => setDevice(data))
      .finally(() => setLoading(false))
      .catch((error) => alert(error.message));
  }, [id]);
  const [rtgDevise, setRtgDevise] = useState(null);

  if (loadind) {
    return <Spinner animation="grow" />;
  }
  const click = async () => {
    try {
      const data = await updateRating(id, device.rating);
      setRtgDevise(data.rating);
    } catch (error) {
      console.log(error);
    }
  };

  const addToBasket = async () => {
    const user = localStorage.getItem("token");
    if (user)
      try {
        await addDevice({ id, user, count });
      } catch (error) {
        console.log(error);
      }
  };

  return (
    <>
      {device === null ? (
        <ErrorPage />
      ) : (
        <Container className="mt-3">
          <Row>
            <Col md={4}>
              <Image
                className="device-icon"
                src={process.env.REACT_APP_API_URL + device.img}
              />
            </Col>
            <Col md={4}>
              <Row className="d-flex flex-column align-items-center">
                <h2>{device.name}</h2>

                <div
                  className="bgStar"
                  style={{
                    background: `url(${ratingIcon}) no-repeat center center`,
                  }}
                >
                  {rtgDevise || device.rating}
                </div>
                <Button onClick={click} className="clearFiltres m-2">
                  Add <Image className="smStar" src={star} />
                </Button>
              </Row>
            </Col>
            <Col md={4}>
              <Card
                className="d-flex flex-column align-items-center justify-content-around"
                style={{
                  width: 300,
                  height: 300,
                  fontSize: 32,
                  border: "5px solid lightgray",
                }}
              >
                <h3>From: {device.price} $</h3>
                <Button onClick={addToBasket} variant={"outline-dark"}>
                  Add to basket
                </Button>
              </Card>
            </Col>
          </Row>
          <Row className="d-flex flex-column m-3">
            <h1>Description</h1>
            {device.info.map((info, index) => (
              <Row
                key={info.id}
                style={{
                  background: index % 2 === 0 ? "lightgray" : "transparent",
                  padding: 10,
                }}
              >
                {info.title}: {info.description}
              </Row>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default DevicePage;
