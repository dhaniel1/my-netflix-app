import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCkiB1QcVKsRkoRSjP0s8n9cTJMYRRVeDI",
  authDomain: "my-netlix-app.firebaseapp.com",
  projectId: "my-netlix-app",
  storageBucket: "my-netlix-app.appspot.com",
  messagingSenderId: "367223129961",
  appId: "1:367223129961:web:113a3a44ce28e4e2785ff8",
  measurementId: "G-BEMR94XZ6G",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

export default db;

/* const emailValue = emailRef.current ? emailRef.current.value : "";
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
  let error; */

/*const firebaseApp = initializeApp(firebaseConfig);
 const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp); */
