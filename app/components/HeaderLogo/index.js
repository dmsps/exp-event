import React, { Component } from 'react';
import styled from 'styled-components';

import A from '../A';
import Logo from './Logo';

const StyledLink = styled(A)`
  display: flex;
`;

// eslint-disable-next-line react/prefer-stateless-function
export default class HeaderLogo extends Component {
  render() {
    return (
      <StyledLink href="//experum.ru" title="Переход на страницу Experum">
        <Logo />
      </StyledLink>
    );
  }
}
