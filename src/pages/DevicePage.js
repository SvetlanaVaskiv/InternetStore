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
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceAPI";
import ErrorPage from "./ErrorPage";

const DevicePage = () => {
  const [loadind, setLoading] = useState(true);
  const [device, setDevice] = useState({});
  const { id } = useParams();
  useEffect(() => {
      fetchOneDevice(id)
        .then((data) => setDevice(data))
        .finally(() => setLoading(false))
        .catch((error) => alert(error.message))
  }, []);

  if (loadind) {
    return <Spinner animation="grow" />;
  }
  return (<>
    {device === null ? <ErrorPage/> : <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + device.img}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${ratingIcon}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
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
            <Button variant={"outline-dark"}>Add to basket</Button>
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
    </Container>}</>
  );
};

export default DevicePage;
