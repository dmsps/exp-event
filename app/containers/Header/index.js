import React from 'react';
import { connect } from 'react-redux';

import HeaderMenu from '../../components/HeaderMenu';
import HeaderLogo from '../../components/HeaderLogo';
import Button from '../../components/Button';
import GridContainer from '../../components/GridContainer';

import { Wrapper, WrapperTop } from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export class Header extends React.PureComponent {
  render() {
    return (
      <WrapperTop>
        <GridContainer>
          <Wrapper>
            <HeaderLogo />
            <HeaderMenu />
            <Button href="#">Записаться</Button>
          </Wrapper>
        </GridContainer>
      </WrapperTop>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
