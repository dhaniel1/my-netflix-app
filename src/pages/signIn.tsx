import React, { useContext, useRef } from "react";
import { Button, Navbar } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../store/authContext";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { firebaseConfig } from "../firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const ctx = useContext(authContext);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const emailValue = emailRef.current ? emailRef.current.value : "";
  const passwordValue = passwordRef.current ? passwordRef.current.value : "";

  function register(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        console.log(userCredential);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  }

  function signInFn(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    ctx.authenticated = true;
    navigate("/home");
  }
  let error;

  return (
    <div className="signin">
      <Navbar />
      <div className="signin__mainContainer">
        <div className="signin__formContainer">
          <h1>Sign In</h1>
          <form className="signin__form">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                ref={emailRef}
                aria-describedby="emailHelp"
                placeholder="Email or phone number"
              />
              {error && (
                <small id="emailHelp" className="form-text text-muted">
                  Please enter a valid email or phone number.
                </small>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                ref={passwordRef}
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <Button onClick={signInFn} styles="btn btnRed" title="Submit" />
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
                New to Netflix? <span onClick={register}>Sign up now </span>
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
