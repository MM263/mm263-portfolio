import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import theme from '../components/styles/theme';

import Background from '../components/Background';
import Footer from '../components/Footer';
import Transition from '../components/Transition';
import GlobalStyles from '../components/styles/GlobalStyles';

import './prism.css';
import './fonts.css';

const LayoutContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  max-width: 800px;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1000;
  margin: auto;
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
        <ThemeProvider theme={theme}>
          <LayoutContainer>
            <GlobalStyles />
            <ContentContainer>
              <Transition location={location}>{children}</Transition>
            </ContentContainer>
            <Background />
            <Footer />
          </LayoutContainer>
        </ThemeProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
