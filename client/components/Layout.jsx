import React, { Component } from 'react';

import { Grid, Row } from 'react-bootstrap';

export default class Layout extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          {this.props.children}
        </Row>
      </Grid>
    );
  }
};
