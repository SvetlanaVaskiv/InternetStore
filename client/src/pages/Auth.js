import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../index";
import { check, login, registration } from "../http/userApi";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, ROOT_ROUTE } from "../utils/consts";
import { useFormik } from "formik";
import * as Yup from "yup";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const handleLinkClick = () => {
    user.setError(false);
  };
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(8, "Must be at least 8 characters")
        .matches(/[A-Z]+/, "Password must have at least one uppercase letter")
        .matches(/[a-z]+/, "Password must have at least one lowercase letter")
        .matches(/[\d]+/, "Password must have at least one number")
        .matches(
          /[@$!%*?&]+/,
          "Password must have at least one special character"
        )

        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        if (isLogin) {
          await login(values.email, values.password);
        } else {
          await registration(values.email, values.password);
        }
        const checked = await check()
          .then((data) => data)
          .catch((err) => {
            console.warn("Authorization error", err.message);

            user.setError(err.message);
          });
        if (checked) {
          user.setRole(checked.role);
          user.setId(checked.id);
          user.setUser(user);
          user.setIsAuth(true);
          user.setError(false);

          navigate(ROOT_ROUTE);
        }
      } catch (e) {
        alert(e.response.data.message);
      }
    },
  });
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-4">
        <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
        <Form onSubmit={formik.handleSubmit} className="d-flex flex-column">
          <Form.Control
            className="mt-3 "
            placeholder="Enter your email address"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <Alert variant="warning">{formik.errors.email}</Alert>
          ) : null}
          <Form.Control
            className="mt-3"
            placeholder="Enter your password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <Alert variant="success">{formik.errors.password}</Alert>
          ) : null}
          <div className="d-flex justify-content-between mt-3 ps-3 pe-3">
            {isLogin ? (
              <div>
                Don't have an account?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Sign Up</NavLink>
              </div>
            ) : (
              <div>
                Do you already have an account?{" "}
                <NavLink to={LOGIN_ROUTE}>Login</NavLink>
              </div>
            )}

            <Button variant={"outline-success"} type="submit">
              {isLogin ? "Enter" : "Sign Up"}
            </Button>
          </div>
          {user.error && (
            <div className="auth-error">
              <p>Incorrect login/password. Try again or</p>{" "}
              <NavLink to={REGISTRATION_ROUTE} onClick={handleLinkClick}>
                Sign Up
              </NavLink>
            </div>
          )}
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
