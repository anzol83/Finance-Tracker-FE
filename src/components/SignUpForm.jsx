import { Button, Form } from "react-bootstrap";
import InputField from "./InputField";
import { useState } from "react";



const SignupForm = () => {

    const initialFormData = {
        name: '',
        email: '',
        password: '',
        confirm_password: '',
    }

    const [formData, setFormData] = useState(initialFormData)
    const {full_name, email, password, confirm_password} = formData

    // Handle on change
    const handleOnChange = (e) => {
        const { value, name } = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    // Handle On Submit
    const handleOnSubmit = (e) => {
        e.preventDefault()

        // send an api request to create a user
    }

    return (
        <Form onSubmit={handleOnSubmit}>
            <InputField 
            label="Name"
            inputFieldAttributes={{
                type: 'text',
                name: 'full_name',
                placeholder: 'Enter your full name',
                required: true,
                value: full_name,
                onChange: handleOnChange
                }}
            />

            <InputField 
            label="Email"
            inputFieldAttributes={{
                type: 'email',
                name: 'email',
                placeholder: 'Enter your email',
                required: true,
                value: email,
                onChange: handleOnChange
                }}
            />

            <InputField 
            label="Password"
            inputFieldAttributes={{
                type: 'text',
                name: 'password',
                placeholder: 'Password',
                required: true,
                value: password,
                onChange: handleOnChange
                }}
            />

            <InputField 
            label=" Confirm Password"
            inputFieldAttributes={{
                type: 'text',
                name: 'confirm_password',
                placeholder: 'Confirm password',
                required: true,
                value: confirm_password,
                onChange: handleOnChange
                }}
            />

            <Button variant="primary" type="submit">Sign Up</Button>
        </Form>
    );
}

export default SignupForm;