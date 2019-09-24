import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Container } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { logout } from "../../auth/authActions";

const actions = {
  logout
};

const mapState = state => ({
  auth: state.auth
});

//simple navbar
class NavBar extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            <img src="/assets/baseline_restaurant_white_18dp.png" alt="logo" />
            Carlo Di Formaggio
          </Menu.Item>
          <Menu.Item name="Kitchen" />
        </Container>
      </Menu>
    );
  }
}

export default withRouter(
  connect(
    mapState,
    actions
  )(NavBar)
);
