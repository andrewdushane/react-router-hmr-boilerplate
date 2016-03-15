import React, { Component } from 'react';

import { Grid, Row, Nav, NavItem } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

export default class Layout extends Component {
  render() {
    return (
      <Grid fluid>
        <Nav bsStyle="pills" activeKey={1}>
          <LinkContainer to="/"><NavItem eventKey={1}>Home</NavItem></LinkContainer>
          <LinkContainer to="/about"><NavItem eventKey={2} title="About">About</NavItem></LinkContainer>
        </Nav>
        <Row>
          {this.props.children}
        </Row>
      </Grid>
    );
  }
};
