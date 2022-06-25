import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Button, Card, Container, ListGroup,  Navbar, Offcanvas} from "react-bootstrap";
import { Context } from "../index";
import "../index.css";

const TypeBar = observer(() => {

  const { device } = useContext(Context);
  const click = ()=>{
    device.removeSelectedType(device.selectedType.name)
    device.removeSelectedBrand(device.selectedBrand.name)
  }
  return (
    <>
    {device.selectedType.name ? <Button  className="btnn clearFiltres mt-1 mb-2" onClick={click}  ><span>Clear filtres</span>
             
            </Button> : device.selectedBrand.name ? <Button  className="btnn clearFiltres mt-1 mb-2" onClick={click}  > <span>Clear filtres</span>
             
            </Button> : null}
            
 {device.selectedType.name && (
        <Card className="d-flex flex-row  justify-content-center p-0 " border="primary" text="primary">
          <Card.Body className="p-0 ps-1 align-self-center">
            {device._selectedType.name}
          </Card.Body>
          <Button className="removeChoise m-2"
              onClick={() =>
                device.removeSelectedType(device._selectedType.name)
              }
            ><span>Delete</span>
              </Button>
        </Card>
      )}
      {device.selectedBrand.name && (
        <Card className="d-flex flex-row  justify-content-center p-0 " border="primary" text="primary">
          <Card.Body className="p-0 ps-1 align-self-center">
            {device.selectedBrand.name}
          </Card.Body>
          <Button className="removeChoise m-2"
              onClick={() =>
                device.removeSelectedBrand(device.selectedBrand.name)
              }
            ><span>Delete</span>
              </Button>
        </Card>
      )}

 <Navbar  bg="light" expand='false' className="mb-3 listSmall">
      <Container fluid>
        <Navbar.Brand href="#">Types</Navbar.Brand>
        <Navbar.Toggle aria-controls='offcanvasNavbar-expand-false' />
        <Navbar.Offcanvas
aria-labelledby="offcanvasNavbarLabel-expand-false"
placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='false'>
              Choose type of device
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          {device.types.map((type) => ( <ListGroup.Item
          key={type.id}
          active={type.id === device.selectedType.id}
          style={{ cursor: "pointer" }}
          className=" mt-3 p-1"
        >
          {" "}
          <div onClick={() => device.setSelectedType(type)}>{type.name}</div>
        </ListGroup.Item>
           ))}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>


      
      {device.types.map((type) => (
        <ListGroup.Item
          key={type.id}
          active={type.id === device.selectedType.id}
          style={{ cursor: "pointer" }}
          className=" mt-3 p-1 typeListLarge"
        >
          {" "}
          <div onClick={() => device.setSelectedType(type)}>{type.name}</div>
        </ListGroup.Item>
      ))}
    </>
  );
});

export default TypeBar;
