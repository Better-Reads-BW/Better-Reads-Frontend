import React from "react";
import { Menu, Icon, } from "semantic-ui-react";
import { NavLink, } from "react-router-dom";
import BookList from "./BookList";
import StartPage from './StartPage';
import styled from 'styled-components';
import Login from './LoginForm';
import Register from './Register';


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
            <Icon name = 'book' />
            <div>Some Books</div>
        </Menu.Item>
        <Menu.Item name ='login' as={NavLink} to='/login' active={Login}>
            <Icon name= 'sign-in' />
            <div>Login</div>
        </Menu.Item>
        <Menu.Item name = 'register' as={NavLink} to= '/register' active ={Register}>
            <Icon name = 'signup' />
            <div>Register</div>
        </Menu.Item>
        
    </Menu>
    </NavBar>

    )
}