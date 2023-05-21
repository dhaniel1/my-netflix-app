// import { getCharacterValidationError } from ".";
// import { object, string, number, date, InferType } from "yup";
import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),

  password: Yup.string()
    .required("Please enter a password")
    .min(4, "Password must have at least 4 characters"),
  // check minimum characters
  //
  // // different error messages for different requirements
  //  .matches(/[0-9]/, getCharacterValidationError("digit"))
  // .matches(/[a-z]/, getCharacterValidationError("lowercase"))
  // .matches(/[A-Z]/, getCharacterValidationError("uppercase"))
});
