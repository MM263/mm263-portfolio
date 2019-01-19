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

  @media only screen and (max-width: 600px) {
    ${Link}, ${StyledATag} {
      font-size: 1.2rem;
      &:after {
        height: 0.8rem;
        margin-top: 1.2rem;
      }
    }
    ${BigName} {
      font-size: 3.7rem;
      margin-bottom: 2rem;
      &:after {
        height: 1.7rem;
        margin-top: 1.2rem;
      }
    }
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

  @media only screen and (max-width: 600px) {
    width: 1.3rem;
    height: 1.3rem;
    margin: 0 5px -2px 0;
  }
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
