import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

class Containers extends Component {
  render() {
    const { children } = this.props
    const content= children
    return (
      <Container id='center_container'>
        {content}
      </Container>
    )
  }
};

export default Containers;
