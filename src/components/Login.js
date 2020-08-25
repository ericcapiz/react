import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Container,
  Col
} from "reactstrap";
import { useHistory } from "react-router-dom";
import "./Login.css";
import StudentNav from "../components/students/StudentNav";

const Login = (props) => {
  const history = useHistory();

  const goHome = () => {
    console.log("Going home");
    history.push("/");
  };

  const goRegister = () => {
    console.log("Going to register");
    history.push("/register");
  };

  // const goStudentDashboard = () => {
  //   console.log("Going to student dashboard");
  //   history.push("/student_dashboard");
  // };

  //Set the state for user
  const [user, setUser] = useState({ username: "", password: "" });

  //Set the state for error
  const [errors, setErrors] = useState({ username: "", password: "" });

  //Set the state for server error
  const [serverError, setServerError] = useState("");

  //Set the state for button
  const [button, setButton] = useState(true);

  //Form schema for login
  const formSchema = yup.object().shape({
    username: yup.string().required("Name is required"),
    password: yup.string().required("Password is required"),
  });

  //Form validation function for login
  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.name ? e.target.value : null)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "", //Clear any error messages
        });
      })
      .catch((err) => {
        console.log(err);
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0], //Display the error message
        });
      });
  };

  //Handle user input changes for login
  const handleChanges = (e) => {
    // e.persist();
    // console.log("new input here!", e.target.value);
    setUser({ ...user, 
      [e.target.name]: e.target.value });
    // validateChange(e);
    // setUser(newUser);
  };

  //Submit form function for login
  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    axios
      .post("https://react-iota.vercel.app/login", user) //Temporary API
      .then((response) => {
        console.log("POST is successful!", response.data);
        window.localStorage.setItem('token', response.data.payload)
        props.history.push('/student_dashboard')
        setServerError(null);
        setUser({ Username: "", Password: "" }); //Clear the form
      })
      .catch((err) => {
        setServerError("API POST request failed!");
      });
  };

  //If everything checks, then button is enabled
  useEffect(() => {
    formSchema.isValid(user).then((isValid) => {
      setButton(!isValid);
    });
  }, [user]);

  return (
    <div>
      <NavLink className="home" onClick={goHome}>
        Home
      </NavLink>

      <StudentNav />
      <div className="login">
        <h3>We're here to help.</h3>
        <p>
          Create a help ticket and we'll connect you <br></br> with a Lambda
          School Helper.
        </p>

        <Container className="form">
          <Form onSubmit={submitForm}>
            {serverError ? <p>{serverError}</p> : null}

            {/* Username Field */}
            <Col>
              <FormGroup className="username">
                <Label htmlFor="username" xs={4}>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    value={user.username}
                    onChange={handleChanges}
                  ></Input>
                  {errors.username.length > 0 ? (
                    <p className="error">{errors.username}</p>
                  ) : null}
                </Label>
              </FormGroup>
            </Col>

            {/* Password Field */}
            <Col>
              <FormGroup>
                <Label htmlFor="password" xs={4}>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChanges}
                  ></Input>
                  {errors.password.length > 0 ? (
                    <p className="error">{errors.password}</p>
                  ) : null}
                </Label>
              </FormGroup>
            </Col>

            <Button
              type="submit"
              disabled={button}
              onClick={submitForm}
              className="buttonForm"
              style={{ backgroundColor: "#74CBC1" }}
            >
              Login
            </Button>
          </Form>
        </Container>

        {/* If user hasn't registered, they would click the Register button instead and go to Eric's Register page*/}
        <div className="navRegister">
          <NavLink className="nonClick">Haven't registered? </NavLink>
          <NavLink onClick={goRegister} className="click">
            Click here
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
