import { Form } from "react-bootstrap"
import InputField from "./InputField"
import { useState } from "react"
import { loginUser } from "../axios/userAxios"

const LoginForm = () => {
    const [formData, setFormData] = useState(initialFormData)
    const { email, password } = formData

// State to implement loading flow
const [setIsLoading, setIsLoading] = useState(false)

      // Handle on change
      const handleOnChange = (e) => {
        const { value, name } = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    // Handle On Submit
    const handleOnSubmit = async (e) => {
        e.preventDefault()

        //setIsLoading to true
        setIsLoading(true)

        // send api request to try login
        const response = await loginUser(email, password)

        //setIsLoading to false
        setIsLoading(false)

        // Handle Error
    }

  return (
   <Form>
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

   </Form>
  )
}

export default LoginForm
