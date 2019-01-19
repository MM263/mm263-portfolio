import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import theme from '../components/styles/theme';

import Footer from '../components/Footer';
import Canvas from '../components/Canvas';
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

class Layout extends React.PureComponent {
  state = {
    fun: true,
  };

  handleDisableFun = () => {
    const { fun } = this.state;

    this.setState({ fun: !fun });
  };

  render() {
    const { location, children } = this.props;
    const { fun } = this.state;

    return (
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
                {
                  name: 'description',
                  content:
                    'Tony Antonov - Frontend Web Developer with eyes on the prize ¯\\_(ツ)_/¯',
                },
                {
                  name: 'keywords',
                  content:
                    'Tony Antonov, react developer, react.js developer, react blog, react, frontend, redux, apollo, graphql, git, gatsby, developer, web developer, js developer',
                },
              ]}>
              <html lang="en" />
            </Helmet>
            <ThemeProvider theme={theme}>
              <LayoutContainer>
                <GlobalStyles />
                <ContentContainer>
                  <Transition location={location}>{children}</Transition>
                </ContentContainer>
                <Footer disableFun={this.handleDisableFun} fun={fun} />
                {fun && <Canvas />}
              </LayoutContainer>
            </ThemeProvider>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
