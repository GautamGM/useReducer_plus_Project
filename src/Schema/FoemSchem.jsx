import * as yup from "yup";
export const validationSchema = yup.object({
    user_name: yup.string().required("First name is required"),
    user_phone_number: yup
      .string()
      .required("Phoe number  is required")
      .matches(/^\d{10}$/, "invaild phone number")
      .required("Phone number is required"),
  });


  