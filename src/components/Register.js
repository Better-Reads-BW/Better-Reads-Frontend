import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormP = styled.p`
text-align: center;
font-size: 20px;
`;

const FormDiv = styled.div`
display: flex;
justify-content: center;
`;

function Register(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const baseURL = 'https://ilovelambda.herokuapp.com/api';
    axios
      .post(`${baseURL}/auth/register`, { username: email, password })
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        props.history.push("/login")
    
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <FormDiv>
    <form onSubmit={handleSubmit}>
      <FormP>Register</FormP>
      <input
        value={email}
        name="email"
        type="text"
        onChange={e => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        value={password}
        name="password"
        type="password"
        onChange={e => setPassword(e.target.value)}
        placeholder="password"
      />
      <button type="submit">Submit</button>
    </form>
    </FormDiv>
  );
}

export default Register;