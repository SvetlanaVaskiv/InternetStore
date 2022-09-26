import { Image } from "react-bootstrap";
import asus from "../assets/store_photo3.jpeg";
import { observer } from "mobx-react-lite";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Footer = observer(() => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: async (values) => {
      console.log(values.email);
    },
  });

  return (
    <section>
      <div className="footer">
        <div className="box-6 ">
          <p>
            Our brand has made its mark in the e-commerce world in 2012, as a
            cross-border shopping platform serving more than 180 countries.
            Through its website and app, we provide over 100 million brand-new,
            unique products from the best international brands in the US, the
            UK, and other countries. Our internet store enables seamless and
            confined payment methods as well as faster checkouts while
            amplifying the shopper's experience. As an International Shopping
            doorway, we bring quality products from luxury brands to customers'
            doorsteps from around the world with the assistance of the most
            trusted courier partners in the industry.
          </p>
        </div>
        <div className="box-7 footer-item">
          <h6>
            <strong>FEATURED PRODUCTS</strong>
          </h6>
          <ul>
            <li className="list-group-item">
              <div>
                <Image
                  src={asus}
                  alt="Laptop Asus"
                  className="img-footer-item"
                />
              </div>
              <div className="list-text-item">
                <p>Motorolla Moto</p>
                <p>$299.99</p>
              </div>
            </li>
            <li className="list-group-item">
              <div>
                <Image
                  src={asus}
                  alt="Laptop Asus"
                  className="img-footer-item"
                />
              </div>
              <div className="list-text-item">
                <p>Motorolla Moto</p>
                <p>$299.99</p>
              </div>
            </li>
            <li className="list-group-item">
              <div>
                <Image
                  src={asus}
                  alt="Laptop Asus"
                  className="img-footer-item"
                />
              </div>
              <div className="list-text-item">
                <p>Motorolla Moto</p>
                <p>$299.99</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="box-8 footer-item">
          <h6>
            <strong>TOP RATED PRODUCTS</strong>
          </h6>
          <ul>
            <li className="list-group-item">
              <div>
                <Image
                  src={asus}
                  alt="Laptop Asus"
                  className="img-footer-item"
                />
              </div>
              <div className="list-text-item">
                <p>Motorolla Moto</p>
                <p>$299.99</p>
              </div>
            </li>
            <li className="list-group-item">
              <div>
                <Image
                  src={asus}
                  alt="Laptop Asus"
                  className="img-footer-item"
                />
              </div>
              <div className="list-text-item">
                <p>Motorolla Moto</p>
                <p>$299.99</p>
              </div>
            </li>
            <li className="list-group-item">
              <div>
                <Image
                  src={asus}
                  alt="Laptop Asus"
                  className="img-footer-item"
                />
              </div>
              <div className="list-text-item">
                <p>Motorolla Moto</p>
                <p>$299.99</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="box-9 footer-item">
          <h6>
            <strong>LATEST NEWS</strong>
          </h6>
          <h6>
            <strong>NEWSLETTER</strong>
          </h6>
            <div className="form-container">
              <form onSubmit={formik.handleSubmit} className="newsletter">
                <input
                  placeholder="Enter your email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <button
                  type="submit"
                >
                  SEND
                </button>
              </form>
            </div>
        </div>
      </div>
    </section>
  );
});
