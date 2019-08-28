import React from "react";
import BookList from './components/BookList';
import {Route} from 'react-router-dom';
import FormikSearchForm from './components/SearchForm';
import TabNav from './components/TabNav';
import StartPage from './components/StartPage';
import styled from 'styled-components';
import FormikSignUpForm from "./components/SignupForm";

const AppDiv = styled.main`
background-color: #f9f7f4;
`;


export default function App() {
  return (
    <main>
      <TabNav />
      <AppDiv>
      <Route exact path = '/' component = {StartPage} />
      <Route exact path = '/booklist' component = {BookList}/>
      <Route exact path = '/searchform' component = {FormikSearchForm} />
      <Route exact path = '/signup' component = {FormikSignUpForm} />
      </AppDiv>
    </main>
  );
}