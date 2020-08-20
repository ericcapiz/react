import React,{useState, useEffect} from 'react';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const FormCont = styled.form`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    position: relative;
    top: 80px;
    left: 550px;
    border: 3px solid lightblue;
    width: 400px;
    padding: 50px;

    label{
        margin: 0px 0px 15px 0px;
        align-items: center;
        padding: 5px;
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

const ErrorMsg = styled.p `

  font-size: 1.2rem;
  color: red;

`;

const Register =()=>{

    const [newReg, setNewReg] = useState({
        fname: "",
        lname: "",
        number: "",
        email:"",
        call: false,
        text: false,
        byemail: false,
        username:"",
        password: "",
        repassword: "",
        helper:false,
        student:false,
      });

      const [errors, setErrors]=useState({
        fname: "",
        lname: "",
        number: "",
        email:"",
        username:"",
        password: "",
        repassword: "",
      })

      const [buttonDisabled, setButtonDisabled] = useState(true);

      const phoneRegex = RegExp(
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
      );

    const formSchema = yup.object().shape({
        fname: yup.string().required('Enter Your First Name'),
        lname: yup.string().required('Enter Your Last Name'),
        number: yup.string().matches(phoneRegex, "Invalid phone number").required("Enter A Valid Number"),
        email: yup.string().email("Must be a valid email").required("Must include an email"),
        call: yup.boolean(),
        text: yup.boolean(),
        byemail: yup.boolean(),
        username:yup.string().required('Username is required'),
        password:yup.string().required('Password is required').matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
        repassword:yup.string().oneOf([yup.ref('password'), null]).required('Password confirm is required'),
        helper: yup.boolean(),
        student: yup.boolean()
    });

    const validateChange = (e) => {
  

        yup
          .reach(formSchema, e.target.name)
          .validate( e.target.value)
          .then((valid) => {
      
            setErrors({
              ...errors,
              [e.target.name]: ""
            });
          })
          .catch((err) => {
            console.log(err);
      
            
            setErrors({
              ...errors,
              [e.target.name]: err.errors[0]
            });
          });
      };

      const inputChange = (e) => {
        e.persist();
        const newSetUp = {
          ...newReg,
          [e.target.name]:
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
      
        validateChange(e);
        setNewReg(newSetUp);
      };

      const formSubmit = (e) => {
        e.preventDefault(); 
      
        axios
          .post("https://reqres.in/api/users", newReg)
          .then((res) => {
            
            setNewReg({
                fname: "",
                lname: "",
                number: "",
                email:"",
                call: false,
                text: false,
                byemail: false,
                username:"",
                password: "",
                repassword: "",
                helper:false,
                student:false,
              
            });
          })
          .catch((err) => {});
      };

      useEffect(() => {
        formSchema.isValid(newReg).then((isValid) => {
          setButtonDisabled(!isValid);
        });
      }, [newReg]);
    return(
        <FormCont onSubmit={formSubmit}>
            <label htmlFor="fname">
                First Name:
                <input type="text" id="fname" data-cy="fname" name="fname" placeholder="First Name" value={newReg.fname}
          onChange={inputChange}/>
          {errors.fname.length > 0 ? <ErrorMsg>{errors.fname}</ErrorMsg> : null}
            </label>
            <label htmlFor="lname">
                Last Name:
                <input type="text" id="lname" data-cy="lname" name="lname" placeholder="Last Name" value={newReg.lname}
          onChange={inputChange}/>
          {errors.lname.length > 0 ? <ErrorMsg>{errors.lname}</ErrorMsg> : null}
            </label>
            <label htmlFor="phone">
                Contact Number:
                <input type="text" id="number" data-cy="number" name="number" placeholder="Contact Number" value={newReg.number}
          onChange={inputChange}/>
          {errors.number.length > 0 ? <ErrorMsg>{errors.number}</ErrorMsg> : null}
            </label>
            <label htmlFor="email">
                Email:
                <input type="text" id="email" data-cy="email" name="email" placeholder="Email" value={newReg.email}
          onChange={inputChange}/>
          {errors.email.length > 0 ? <ErrorMsg>{errors.email}</ErrorMsg> : null}
            </label>
            <label htmlFor="contactmethod">
               Preferred Contact Method: <br></br>
                <input type="checkbox" id="call" data-cy="call" name="call" value={newReg.call}
          onChange={inputChange}/><span> By Phone</span>
                
                <input type="checkbox" id="text" data-cy="text" name="text" value={newReg.text}
          onChange={inputChange}/><span> Text</span>
                
                <input type="checkbox" id="byemail" data-cy="byemail" name="byemail" value={newReg.byemail}
          onChange={inputChange}/><span> Email</span>
            </label>

            <label htmlFor="username">
                Create Username:
                <input type="text" id="username" data-cy="username" name="username" placeholder="Username" value={newReg.username}
          onChange={inputChange}/>
          {errors.username.length > 0 ? <ErrorMsg>{errors.username}</ErrorMsg> : null}
            </label>

            <label htmlFor="password">
                Create Password:
                <input type="text" id="password" data-cy="password" name="password" placeholder="Password" value={newReg.password}
          onChange={inputChange}/>
          {errors.password.length > 0 ? <ErrorMsg>{errors.password}</ErrorMsg> : null}
                </label>

                <label htmlFor="repassword">
                Confirm Password:
                <input type="text" id="repassword" data-cy="repassword" name="repassword" placeholder="Confirm Password" value={newReg.repassword}
          onChange={inputChange}/>
          {errors.repassword.length > 0 ? <ErrorMsg>{errors.repassword}</ErrorMsg> : null}
            </label>

            <label htmlFor="role">
               Role:
                <input type="checkbox" id="helper" data-cy="helper" name="helper" value={newReg.helper}
          onChange={inputChange}/><span> Helper</span>
                <input type="checkbox" id="student" data-cy="student" name="student" value={newReg.student}
          onChange={inputChange}/><span> Student</span>
            </label>
            <button data-cy="submit" type="submit" disabled={buttonDisabled}>Register</button>
        </FormCont>
    )
}
export default Register;