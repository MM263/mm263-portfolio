import React, { Component } from 'react';
import styled from 'styled-components';

import BigName from './styles/BigName';
import Link from './styles/Link';

const MainStyles = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

class MainPage extends Component {
  render() {
    return (
      <MainStyles>
        <div>
          <BigName>Tony Antonov</BigName>
          <Nav>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/resume">Resume</Link>
          </Nav>
        </div>
      </MainStyles>
    );
  }
}

export default MainPage;
