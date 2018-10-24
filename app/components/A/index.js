import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class Link extends Component {
  render() {
    const { children, className, href, title } = this.props;

    return (
      <a className={className} href={href} title={title}>
        {children}
      </a>
    );
  }
}

Link.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string,
};
