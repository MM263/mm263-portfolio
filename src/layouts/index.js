import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Background from '../components/Background';
import Transition from '../components/Transition';
import GlobalStyles from '../components/styles/GlobalStyles';

import './layouts.css';

const LayoutStyles = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  max-width: 800px;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 auto;
`;

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}>
          <html lang="en" />
        </Helmet>
        <GlobalStyles />
        <LayoutStyles>
          <Transition location={location}>{children}</Transition>
          <Background />
        </LayoutStyles>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
