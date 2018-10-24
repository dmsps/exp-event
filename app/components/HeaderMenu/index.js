import React, { Component } from 'react';

import { Ul, Li, StyledLink } from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class HeaderMenu extends Component {
  render() {
    return (
      <Ul>
        <Li>
          <StyledLink href="menu-1" title="Link to Menu 1">
            Menu 1
          </StyledLink>
        </Li>
        <Li>
          <StyledLink href="menu-2" title="Link to Menu 2">
            Menu 2
          </StyledLink>
        </Li>
      </Ul>
    );
  }
}
