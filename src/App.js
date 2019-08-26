import React from "react";
// import TabNav from "./components/TabNav.js";
// import Header from "./components/Header.js";
import BookList from './components/BookList';
import {Route} from 'react-router-dom';
import FormikSearchForm from './components/SearchForm';
import TabNav from './components/TabNav';
import StartPage from './components/StartPage';


export default function App() {
  return (
    <main>
      <TabNav />
      <Route exact path = '/' component = {StartPage} />
      <Route exact path = '/booklist' component = {BookList}/>
      <Route exact path = '/searchform' component = {FormikSearchForm} />
      
    </main>
  );
}


