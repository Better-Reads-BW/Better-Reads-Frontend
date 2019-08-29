import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Form, Field, withFormik} from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';



const Users = styled.div`
display: flex;
flex-wrap: wrap;
border: 2px solid black;
margin 10px;
background: #115DA8;

`;

const TosLabel = styled.label`
margin: 10px;
`;


const TextField = styled.div`
margin: 10px;
`;

const UserList = styled.ul`
list-style: none;
background-color: #00a86b;
width: 20%;
margin: 15px;
text-align: center;
padding: 0 0 5px 0;
border-radius: 15px;

`;

const FormDiv = styled.div`
align-content: center;
margin: 50px;
`;

const JoinTeam = styled.h1`
font-size: 30px;
`;


const SignUpForm = ({errors, touched, values, isSubmitting, status}) => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
      if (status) {
        setUsers([...users, status]);
      }
    }, [users, status]);


    return(
        <FormDiv>
            <JoinTeam>Create an Account</JoinTeam>
            <Form>
                <TextField>
                    <Field type = 'name' name = 'name' placeholder = 'name'/>
                    {touched.name && errors.name && <p>{errors.name}</p>}
                </TextField>

                <TextField>
                    <Field type = 'email' name = 'email' placeholder = 'email'/>
                    {touched.email && errors.email && <p>{errors.email}</p>}
                </TextField>

                <TextField>
                    <Field type = 'password' name = 'password' placeholder = 'password'/>
                    {touched.password && errors.password && <p>{errors.password}</p>}
                </TextField>

                <TextField>
                    <Field type = 'retypedpw' name ='passwordver' placeholder = 'retype password' />
                    {touched.passwordver && errors.passwordver && <p>{errors.passwordver}</p>}
                </TextField>

                    <button type='submit' disabled = {isSubmitting}>Submit</button>
                
            </Form>

            <Users>
                {users.map(user => (
                <UserList key={user.id}>        
                    <li>Name: {user.name}</li>                    
                    <li>Email: {user.email}</li>
                    <li>Password: {user.password}</li>
                    <li>Retype Password: {user.passwordver}</li>
                </UserList>
            
                ))}
             </Users>
        </FormDiv>
    )
}

const FormikSignUpForm = withFormik({mapPropsToValues({ name, email, password, passwordver }){
    return {

        name: name || '',
        email: email || '',
        password: password || '',
        passwordver: passwordver || '',


    };
},
validationSchema: Yup.object().shape({
    name: Yup.string()
        .required("Your Name is Required"),
    email: Yup.string()
        .email("Email not valid")
        .required("An Email is Required"),
    password: Yup.string()
        .min(8, "Your Password Must be 8 or More Characters")
        .required("Password is required"),
    passwordver: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords must match")
        .required("You must confirm your password")

}),
handleSubmit(values, {resetForm, setStatus, setSubmitting}) {

        axios
        .post("https://reqres.in/api/users", values)
        .then(res => {
            console.log(res);
            setStatus(res.data)
            resetForm();
            setSubmitting(false);
            
        })
        .catch(err => {
        console.log(err);
        setSubmitting(false)
        });
    
    
}

})(SignUpForm)

export default FormikSignUpForm