import React from "react";
// import TabNav from "./components/TabNav.js";
// import Header from "./components/Header.js";
import BookList from './components/BookList';
import {Route} from 'react-router-dom';


export default function App() {
  return (
    <main>
      {/* <Header />
      <TabNav /> */}
      {/* <Route exact path = '/' component = {WelcomePage} /> */}
      {/* <Route path = '/booklist' component = {BookList}/> */}
      <BookList />
    </main>
  );
}


