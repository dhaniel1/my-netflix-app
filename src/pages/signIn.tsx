import React, { useContext, useEffect, useState } from "react";
import { Button, Navbar } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../store/authContext";
import { useFormik } from "formik";
import { errorParser } from "../utils";
import Input from "../components/shared/input";
import { validationSchema } from "../utils/schemas";
import { postJSON } from "../api/axios";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  let { authenticated } = useContext(authContext);

  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

  function navigateTo() {
    navigate("/home");
    authenticated = true;
  }

  useEffect(() => {
    // authenticator();
    authenticated && navigate("/home");
  }, [authenticated, navigate]);

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsAuthenticating(true);
      await postJSON(values, navigateTo);
      setIsAuthenticating(false);
    },
  });

  // console.log(restFormik);
  // console.log(submitCount);
  return (
    <div className="signin">
      <Navbar />
      <div className="signin__mainContainer">
        <div className="signin__formContainer">
          <h1>Sign In</h1>
          <form className="signin__form" onSubmit={handleSubmit}>
            <div className="form-group">
              <Input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                error={errorParser(errors, touched, "email")}
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Email or phone number"
              />
            </div>

            <div className="form-group">
              <Input
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                error={errorParser(errors, touched, "password")}
                className="form-control"
                aria-describedby="passwordHelp"
                placeholder="Password"
              />
            </div>

            <Button
              disabled={isAuthenticating}
              styles="btn btnRed"
              type="submit">
              {isAuthenticating ? "Processing..." : " Submit"}
            </Button>

            <div className="form__checkContainer">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>
              <p>
                <Link to={"#"}>Need Help?</Link>
              </p>
            </div>
            <div className="form__signup">
              <p>
                New to Netflix? <span>Sign up now </span>
              </p>
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <Link to={"#"}>Learn more.</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
