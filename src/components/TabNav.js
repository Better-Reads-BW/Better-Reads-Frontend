import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import BookList from "./BookList";
import FormikSearchForm from "./SearchForm";
import StartPage from './StartPage';

export default function TabNav(){
    return (
    <Menu>
        <Menu.Item name = 'Home' as={NavLink} to='/' active={StartPage}>
            <Icon name= 'home' />
            <div>Home Page</div>
        </Menu.Item>
        <Menu.Item name = 'login' as={NavLink} to='/login' active={BookList}>
            <Icon name= 'users' />
            <div>Sample Books</div>
        </Menu.Item>
        <Menu.Item name = 'search' as={NavLink} to='/searchform' active={FormikSearchForm}>
            <Icon name = 'map' />
            <div>Locations</div>
        </Menu.Item>
        
    </Menu>

    )
}