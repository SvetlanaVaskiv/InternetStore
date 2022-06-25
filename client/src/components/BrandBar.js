import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Container, Navbar, Offcanvas, ListGroup } from "react-bootstrap";
import { Context } from "../index";
const BrandBar = observer(() => {
  console.log("BrandBar");

  const { device } = useContext(Context);

  return (
    <>
      <Navbar bg="light" expand="false" className="mb-3 listSmall">
        <Container fluid>
          <Navbar.Brand href="#">Brands</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" />
          <Navbar.Offcanvas
            aria-labelledby="offcanvasNavbarLabel-expand-false"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="false">
                Choose brands of device
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {device.brands.map((brand) => (
                <ListGroup.Item
                  key={brand.id}
                  active={brand.id === device.selectedBrand.id}
                  style={{ cursor: "pointer" }}
                  className=" mt-3 p-1"
                >
                  {" "}
                  <div onClick={() => device.setSelectedBrand(brand)}>
                    {brand.name}
                  </div>
                </ListGroup.Item>
              ))}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {device.brands.map((brand) => (
        <ListGroup.Item
          key={brand.id}
          active={brand.id === device.selectedBrand.id}
          style={{ cursor: "pointer" }}
          className=" mt-3 p-1 typeListLarge"
        >
          {" "}
          <div onClick={() => device.setSelectedBrand(brand)}>{brand.name}</div>
        </ListGroup.Item>
      ))}
    </>
  );
});
export default BrandBar;
