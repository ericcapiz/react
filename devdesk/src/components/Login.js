import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = (props) => {

    return (

        <Form inline>

        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label htmlFor="username" className="mr-sm-2">Username</Label>
          <Input type="text" name="username" id="username" placeholder="Austin Allred" />
        </FormGroup>
        
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label htmlFor="password" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Don't tell!" />
        </FormGroup>
        
        <Button>Submit</Button>
      
        </Form>

    );
    
}

export default Login;