import { check, CustomValidator } from "express-validator";

export const Validation = {
  firstName: () =>
    check("firstname")
      .not()
      .isEmpty()
      .withMessage("First Name is required!")
      .isString()
      .withMessage("First Name must be a string")
      .isLength({ max: 100 })
      .withMessage("First Name should not be more than 100 characters long!"),

  lastName: () =>
    check("lastname")
      .not()
      .isEmpty()
      .withMessage("Last Name is required!")
      .isString()
      .withMessage("Last Name must be a string")
      .isLength({ max: 100 })
      .withMessage("Last Name should not be more than 100 characters long!"),

  dob: () =>
    check("DOB").not().isEmpty().withMessage("Date of Birth is required!"),
  gender: () =>
    check("gender")
      .not()
      .isEmpty()
      .withMessage("Gender is required!")
      .isString()
      .withMessage("Gender must be a string")
      .isIn(["Male", "Female"])
      .withMessage("Gender must be either 'Male' or 'Female'"),

  mobileNumber: () =>
    check("mobilenumber")
      .not()
      .isEmpty()
      .withMessage("Mobile Number is required!")
      .isString()
      .withMessage("Mobile Number must be a string")
      .isLength({ max: 10 })
      .withMessage("Mobile Number should be  10  characters long"),

  email: () =>
    check("email")
      .not()
      .isEmpty()
      .withMessage("Email is required")
      .isEmail()
      .normalizeEmail()
      .withMessage("Please enter a valid email address"),

  password: () =>
    check("password")
      .not()
      .isEmpty()
      .withMessage("Password is required")
      .isString()
      .withMessage("Password must be a string")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
};
