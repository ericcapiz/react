import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = (props) => {

    //Set the state for user
    const [user, setUser] = useState({ Username: "", Password: "" })

    //Set the state for error 
    const [errors, setErrors] = useState({ Username: "", Password: "" })

    //Set the state for server error
    const [serverError, setServerError] = useState("")

    //Set the state for button
    const [button, setButton] = useState(true);

    //Form schema for login
    const formSchema = yup.object().shape({

        username: yup.string().required("Name is required"),
        password: yup.string().required("Password is required")

    })

     //Form validation function for login
     const validateChange = (e) => {

        yup
        .reach(formSchema, e.target.name)
        .validate(e.target.name ? e.target.value : null)
        .then(valid => {
            setErrors({
                ...errors,
                [e.target.name]: "" //Clear any error messages
            })
            
        })
        .catch(err => {
            console.log(err)
            setErrors({
                ...errors,
                [e.target.name] : err.errors[0] //Display the error message
            })
        })
    }

    //Handle user input changes for login
    const handleChanges = (e) => {

        e.persist()
        console.log("new input here!", e.target.value)
        const newUser = { ...user, [e.target.name]: e.target.value }
        validateChange(e)
        setUser(newUser)
      };

      //Submit form function for login
      const submitForm = (e) => {
        e.preventDefault(); 
        console.log("Form submitted!")

        axios
            .post("https://reqres.in/api/users", user) //Temporary API
            .then(response => {
                console.log("POST is successful!", response.data)
                setServerError(null)
                setUser({ Username: "", Password: "" }) //Clear the form
            })
            .catch(err => {
                setServerError("API POST request failed!")
            })
    
      };

    //If everything checks, then button is enabled
    useEffect(() => {
        formSchema.isValid(user)
        .then(isValid => {
            setButton(!isValid)
        })
    }, [user])

    return (

        <Form inline onSubmit={submitForm}>
            {serverError ? <p>{serverError}</p> : null}

        {/* Username Field */}
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label htmlFor="username" className="mr-sm-2">Username</Label>
          <Input 
          type="text" 
          name="username" 
          id="username" 
          placeholder="Austin Allred" 
          value={user.username}
          onChange={handleChanges} >
          </Input>
        {/* {errors.username.length > 0 ? <p>{errors.username}</p> : null} */}
        </FormGroup>
       
          {/* Password Field */}
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label htmlFor="password" className="mr-sm-2">Password</Label>
          <Input 
          type="password" 
          name="password" 
          id="password" 
          placeholder="Don't tell!"
          value={user.password}
          onChange={handleChanges} >
          </Input>
        {/* {errors.password.length > 0 ? <p>{errors.password}</p> : null} */}
        </FormGroup>
       
        <Button type="submit" disabled = {button} >Submit</Button>

          {/* If user hasn't registered, they would click the Register button instead and go to Eric's Register page*/}
        <h3>Haven't registered?</h3>
        <Button type="submit" >Register</Button>
      
        </Form>

    );
    
}

export default Login;