import React from "react";
import { Menu, Icon, } from "semantic-ui-react";
import { NavLink, } from "react-router-dom";
import BookList from "./BookList";
import FormikSearchForm from "./SearchForm";
import StartPage from './StartPage';
import styled from 'styled-components';


const NavBar = styled.div`
display: flex;
background-color: #f4f1ea;
justify-content: center;
`;

export default function TabNav(){
    return (
    <NavBar>
    <Menu>
        <Menu.Item name = 'Home' as={NavLink} to='/' active={StartPage}>
            <Icon name= 'home' />
            <div>Home</div>
        </Menu.Item>
        <Menu.Item name = 'booklist' as={NavLink} to='/booklist' active={BookList}>
            <Icon name= 'users' />
            <div>Sample Books</div>
        </Menu.Item>
        <Menu.Item name = 'search' as={NavLink} to='/searchform' active={FormikSearchForm}>
            <Icon name = 'book' />
            <div>Find Books</div>
        </Menu.Item>
        <Menu.Item name = 'login-signup' as={NavLink} to= '/' active ={StartPage}>
            <Icon name = 'signup' />
            <div>Login/Signup</div>
        </Menu.Item>
        
    </Menu>
    </NavBar>

    )
}