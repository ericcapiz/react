import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = (props) => {

    const [user, setUser] = useState({ Username: "", Password: "" });

    const [errors, setErrors] = useState(emptyData)

    const [serverError, setServerError] = useState("")

    const [button, setButton] = useState(true);

    const handleChanges = (e) => {

        const newUser = { ...user, [e.target.name]: e.target.value };
        setUser(newUser);
      };

      const submitForm = (e) => {
        e.preventDefault(); 
        setUser({ Username: "", Password: "" }); 
      };

    return (

        <Form inline onSubmit={submitForm}>

        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label htmlFor="username" className="mr-sm-2">Username</Label>
          <Input 
          type="text" 
          name="username" 
          id="username" 
          placeholder="Austin Allred" 
          value={user.username}
          onChange={handleChanges} />
        </FormGroup>
        
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label htmlFor="password" className="mr-sm-2">Password</Label>
          <Input 
          type="password" 
          name="password" 
          id="password" 
          placeholder="Don't tell!"
          value={user.password}
          onChange={handleChanges} />
        </FormGroup>
        
        <Button type="submit ">Submit</Button>
      
        </Form>

    );
    
}

export default Login;