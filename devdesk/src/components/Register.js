import React from 'react';
import styled from 'styled-components';

const FormCont = styled.form`
    display: flex;
    flex-direction: column;
    align-items:center;

    label{
        margin: 0px 0px 15px 0px;
        align-items: center;
    }
    input{
        padding: 10px;
    }


    input[type=text],input[type=checkbox]{
        border: none;
        padding: 8px 15px 8px 15px;
        background: lightblue;
        border-radius: 3px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        
    }
    button{
        width: 200px;
        padding: 8px 15px 8px 15px;
        background: lightblue;
        color: #fff;
        border-radius: 3px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
    
    }
`;

const Register =()=>{
    return(
        <FormCont>
            <label htmlFor="fname">
                First Name:
                <input type="text" id="fname" data-cy="fname" name="fname" placeholder="First Name"/>
            </label>
            <label htmlFor="lname">
                Last Name:
                <input type="text" id="lname" data-cy="lname" name="lname" placeholder="Last Name"/>
            </label>
            <label htmlFor="phone">
                Contact Number:
                <input type="text" id="phone" data-cy="number" name="number" placeholder="Contact Number"/>
            </label>
            <label htmlFor="email">
                Email:
                <input type="text" id="phone" data-cy="email" name="email" placeholder="Email"/>
            </label>
            <label htmlFor="contactmethod">
               Preferred Contact Method:
                <input type="checkbox" id="call" data-cy="call" name="call"/>By Phone
                <input type="checkbox" id="text" data-cy="text" name="text"/>Text
                <input type="checkbox" id="byemail" data-cy="byemail" name="byemail"/>Email
            </label>
            <label htmlFor="role">
               Role:
                <input type="checkbox" id="helper" data-cy="helper" name="helper"/>Helper
                <input type="checkbox" id="student" data-cy="student" name="student"/>Student
            </label>
            <button data-cy="submit">Register</button>
        </FormCont>
    )
}
export default Register;