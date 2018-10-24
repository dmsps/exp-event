import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Logo extends Component {
  render() {
    return (
      <img
        src="//experum.ru/img/site-logo--mobile.png"
        srcSet="//experum.ru/img/site-logo--mobile@2x.png x2"
        alt="Experum Logo"
      />
    );
  }
}
