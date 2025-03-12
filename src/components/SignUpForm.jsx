import { Button, Form } from "react-bootstrap";
import InputField from "./InputField";
import { useState } from "react";
import { createUser } from "../axios/userAxios";
import { toast } from "react-toastify";

const SignupForm = () => {
  const initialFormData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const { name, email, password, confirmPassword } = formData;

  // State to implement loading
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // when button is clicked

    setIsLoading(true);

    // Send api request to create a user
    const response = await createUser({ name, email, password });
    // set is loading false when response is here
    setIsLoading(false);
    // Handle error
    if (response.status === "error") {
      return toast.error(response.message);
    }
    // Handle success
    toast.success(response.message);
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <InputField
        label="Name"
        inputFieldAttributes={{
          type: "text",
          name: "name",
          placeholder: "Enter your full name",
          required: true,
          value: name,
          onChange: handleOnChange,
        }}
      />

      <InputField
        label="Email"
        inputFieldAttributes={{
          type: "email",
          name: "email",
          placeholder: "Enter your email",
          required: true,
          value: email,
          onChange: handleOnChange,
        }}
      />

      <InputField
        label="Password"
        inputFieldAttributes={{
          type: "password",
          name: "password",
          placeholder: "Enter new password",
          required: true,
          value: password,
          onChange: handleOnChange,
        }}
      />

      <InputField
        label="Confirm Password"
        inputFieldAttributes={{
          type: "password",
          name: "confirmPassword",
          placeholder: "Please confirm password",
          required: true,
          value: confirmPassword,
          onChange: handleOnChange,
        }}
      />

      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? "Signing Up . . ." : "Sign up"}
      </Button>
    </Form>
  );
};

export default SignupForm;