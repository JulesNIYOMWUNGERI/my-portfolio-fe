import * as Yup from "yup";

export const NewMessageSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
});