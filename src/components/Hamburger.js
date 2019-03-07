import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTransition, animated, config } from 'react-spring';
import styled from '@emotion/styled';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import HamburgerIcon from '../../static/hamburger.svg';
import CloseIcon from '../../static/close.svg';

const HamberderButton = styled.button`
  padding: 1rem;
  height: 4.4rem;
  width: 4.4rem;
  background: ${({ theme }) => theme.accentBG};
  position: fixed;
  top: 3rem;
  right: 3rem;
  z-index: 1100;
  border-radius: 50%;
  border: none;
  transition: background 0.5s ${({ theme }) => theme.ease};
  touch-action: auto;

  svg {
    width: 2rem;
    color: #393939;
  }

  @media only screen and (min-width: 800px) {
    display: none;
  }
`;

const AnimatedOverlay = styled(animated(DialogOverlay))`
  z-index: 1499;
`;

const Content = animated(DialogContent);

const AnimatedContent = styled(Content)`
  position: fixed;
  top: 2rem;
  right: 2rem;
  margin: 0;
  background-color: ${({ theme }) => (theme.night ? '#424242' : '#f7f7f7')};
  transition: background-color 0.5s ${({ theme }) => theme.ease};
  border-radius: 10px;
  justify-content: space-between;
  padding: 1.5rem;
  overflow: hidden;
`;

const ContentContainer = styled(animated.div)`
  display: inline-flex;
  flex-direction: column;
  height: 100%;
  z-index: 2000;

  & > div {
    display: inline;
    margin-bottom: 1.5rem;

    & > div:first-child {
      margin-bottom: 1.5rem;
    }
  }

  nav {
    margin-top: auto;
  }

  ul {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

const Hamberder = ({ children }) => {
  const [open, setOpen] = useState(false);

  const transitions = useTransition(open, null, {
    config: config.stiff,
    from: {
      height: '45px',
      width: '45px',
      backgroundColor: 'hsla(0, 0%, 0%, 0)',
      top: '3rem',
      right: '3rem',
      borderRadius: '50%',
      opacity: '0',
    },
    enter: {
      height: `150px`,
      width: `200px`,
      backgroundColor: 'hsla(0, 0%, 0%, 0.33)',
      top: '2rem',
      right: '2rem',
      borderRadius: '5%',
      opacity: '1',
    },
    leave: {
      height: '45px',
      width: '45px',
      backgroundColor: 'hsla(0, 0%, 0%, 0)',
      top: '3rem',
      right: '3rem',
      borderRadius: '50%',
      opacity: '0',
    },
  });

  return (
    <>
      <HamberderButton onClick={() => setOpen(!open)}>
        {open ? <CloseIcon /> : <HamburgerIcon />}
      </HamberderButton>
      {transitions.map(
        ({ item, key, props: style }) =>
          item && (
            <AnimatedOverlay
              key={key}
              onClick={() => setOpen(!open)}
              style={{ backgroundColor: style.backgroundColor }}>
              <AnimatedContent
                style={{
                  height: style.height,
                  width: style.width,
                  top: style.top,
                  right: style.right,
                  borderRadius: style.borderRadius,
                }}>
                <HamberderButton
                  style={{ zIndex: '1800' }}
                  onClick={() => setOpen(!open)}>
                  {open ? <CloseIcon /> : <HamburgerIcon />}
                </HamberderButton>
                <ContentContainer style={{ opacity: style.opacity }}>
                  {children}
                </ContentContainer>
              </AnimatedContent>
            </AnimatedOverlay>
          )
      )}
    </>
  );
};

Hamberder.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Hamberder;
