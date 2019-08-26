import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Nav = props => <NavLink exact {...props} activeClassName="active" />;

const createLabel = (iconName, labelText) => (
  <span>
    <Icon name={iconName} />
    {labelText}
  </span>
);

const welcomeLabel = createLabel("home", "Home Page");
const panes = [
  {
    menuItem: <Menu.Item key="home" as={Nav} to={`/`} content={welcomeLabel} />
  }
];
const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />;

export default TabNav;
