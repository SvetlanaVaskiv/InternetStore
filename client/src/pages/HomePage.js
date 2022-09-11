import { Button, Image } from "react-bootstrap";
import laptop from "../assets/ASUS_AC_SL1500_.png";
import laptopsAsus from "../assets/store_photo2.png";
import coupleOfLaptops from "../assets/store_photo1.jpeg";
import couple from "../assets/store_photo4.jpeg";
import asus from "../assets/store_photo3.jpeg";
import woman from "../assets/store_photo5.jpeg";
import jwt_decode from "jwt-decode";
import DeviceList from "../components/DeviceList";
import { useContext } from "react";
import { Context } from "..";

export const HomePage = () => {
  const { device } = useContext(Context);
  const { user } = useContext(Context);
  console.log(device.devices.length);
  let token = localStorage.getItem("token");
  if (token) {
    token = jwt_decode(token);
    user.setRole(token.role);
    user.setId(token.id);
  }
  console.log(user.role);

  return (
    <>
      <section>
        <div className="laptopContainer">
          <div className="inscriptions">
            <p>The vision is brighter then ever</p>
            <h2>IMac Pro</h2>
            <p className="offer">NOW STARTING FROM LOWER PRICE</p>
            <Button className="removeChoise ">
              <span>Shop Now</span>
            </Button>
          </div>
          <div className="blueCeill"></div>

          <div className="imageLaptopContainer">
            <Image src={laptop} alt="Laptop" className="laptop" />
          </div>
        </div>
        <div className="imagesContainer">
          <div className="box-1">
            {" "}
            <Image src={laptopsAsus} alt="Laptop" />
          </div>
          <div className="box-2">
            {" "}
            <Image
              src={coupleOfLaptops}
              alt="A couple of laptops"
              className="box-2"
            />
          </div>
          <div className="box-3">
            {" "}
            <Image src={couple} alt="A couple with laptops" />
          </div>{" "}
          <div className="box-4">
            <Image src={asus} alt="Laptop Asus" />
          </div>
          <div className="box-5">
            {" "}
            <Image src={woman} alt="Woman with a laptop" />
          </div>
        </div>
      </section>
      <div className="divider">
        <div className="divider-box1"></div>
        <p>Latest Products</p>
        <div className="divider-box2"></div>
      </div>
      <DeviceList />
    </>
  );
};
