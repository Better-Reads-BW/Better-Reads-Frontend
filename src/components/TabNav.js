import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import BookList from "./BookList";

export default function TabNav(){
    return (
    <Menu>
        <Menu.Item name = 'Home' as={NavLink} to='/' active={WelcomePage}>
            <Icon name= 'home' />
            <div>Home Page</div>
        </Menu.Item>
        <Menu.Item name = 'login' as={NavLink} to='/login' active={BookList}>
            <Icon name= 'users' />
            <div>Characters</div>
        </Menu.Item>
        {/* <Menu.Item name = 'savedbooks' as={NavLink} to='/savedbooks' active={LocationsList}>
            <Icon name = 'map' />
            <div>Locations</div>
        </Menu.Item>
        <Menu.Item name = 'episode' as={NavLink} to='/episode' active={EpisodesList}>
            <Icon name = 'video camera' />
            <div>Episodes</div>
        </Menu.Item> */}
    </Menu>

    )
}