import * as yup from "yup";

export const smtpValidationSchema = yup.object().shape({
  senderName: yup.string().required("Sender Name is required"),
  senderAddress: yup
    .string()
    .email("Invalid Sender Address")
    .required("Sender Address is required"),
  host: yup.string().required("Host is required"),
  port: yup.number().required("*").positive("Port must be a positive number"),
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const signUpSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
  //   'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
  // ),
  rePassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password"), ""], "Passwords must match"),
});

export const postPatchSchema = yup.object({
  title: yup.string().min(3).max(128),
  // TODO: Type this properly from editorjs block types?
  content: yup.mixed(),
});
