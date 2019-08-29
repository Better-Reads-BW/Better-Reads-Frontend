import React from "react";
import BookList from './components/BookList';
import {Route} from 'react-router-dom';
import FormikSearchForm from './components/SearchForm';
import TabNav from './components/TabNav';
import StartPage from './components/StartPage';
import styled from 'styled-components';
// import FormikSignUpForm from "./components/SignupForm";
import FormikLoginForm from './components/LoginForm';
import Register from "./components/Register";
import Login from './components/LoginForm';

const AppMain = styled.main`
background-color: #f9f7f4;
width: 75%;
display: flex;
flex-direction: column;
justify-self: center;

`;

const AppDiv = styled.div`
background-color: #f9f7f4;
`;


export default function App() {
  return (
    <AppMain>
      <TabNav />
      <AppDiv>
      <Route exact path = '/' component = {StartPage} />
      <Route exact path = '/booklist' component = {BookList}/>
      <Route exact path = '/register' render = {props => <Register {...props} />} />
      <Route exact path = '/login' render = {props => <Login {...props} />} />
      </AppDiv>
    </AppMain>
  );
}