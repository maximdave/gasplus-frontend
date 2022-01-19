import React from "react";
import { Container } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./login-page.css";
import Goback from "../../components/GoBack";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().trim().required("Required"),
    password: Yup.string().required("Required"),
  });
  return (
    <Container fluid className="d-flex px-0 login-page">
      <div className="col-md-6 w-100 login-image">
        <h3>Explore Your Creativity</h3>
      </div>
      <div className="goback">
        <Goback />
      </div>
      <div className="col-md-6 login-form-section px-0">
        <h3>Log In</h3>
        <p>
          Don't have an account? <strong>Register</strong>
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="w-100">
            <div className="form-field">
              <label className="field-label" htmlFor="email">
                Email
              </label>
              <Field
                type="text"
                placeholder="contact@xopixel.com"
                name="email"
                className="form-input"
              />
              <ErrorMessage
                name="email"
                component="small"
                className="input-error"
              />
            </div>
            <div className="form-field">
              <label className="field-label" htmlFor="password">
                Password
              </label>
              <Field name="password" className="form-input" />
              <ErrorMessage
                name="password"
                component="small"
                className="input-error"
              />
              <button className="login-btn mt-4">LOGIN</button>
            </div>
          </Form>
        </Formik>
        <small className="text-center mt-4 terms">
          By continuing, you agree to accept our Privacy Policy & Terms of
          Service.
        </small>
      </div>
    </Container>
  );
};

export default LoginPage;
