import React, { Component } from 'react';
import styled from 'styled-components';

import BigName from '../components/styles/BigName';
import Link, { StyledATag } from '../components/styles/Link';
import Download from '../images/download.svg';
import placeholder from '../images/placeholder.jpg';

const MainStyles = styled.div`
  ${BigName} {
    margin-bottom: 2rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const DownloadIcon = styled(Download)`
  width: 1.8rem;
  height: 1.8rem;
  margin: 0 5px -3px 0;
  color: ${({ theme }) => theme.black};
  transform: skew(-10deg);
`;

class IndexPage extends Component {
  render() {
    return (
      <MainStyles>
        <BigName>Tony Antonov</BigName>
        <Nav>
          <Link to="/about">About Me</Link>
          <Link to="/portfolio">Portfolio</Link>
          <StyledATag href={placeholder} download>
            <DownloadIcon />
            Resume
          </StyledATag>
        </Nav>
      </MainStyles>
    );
  }
}

export default IndexPage;
