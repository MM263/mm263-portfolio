import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group';

const TransitionDiv = styled.div`
  z-index: 1000;
  transform: ${({ status }) =>
    status === 'entering' ? 'translateX(-30px)' : 'translateX(0px)'};
  transition: ${({ status, theme }) =>
    status === 'entered' ? `transform 0.5s ${theme.ease}` : 'all 0s 0s ease'};

  @media only screen and (max-width: 600px) {
    transition-property: none;
    transform: translateX(0px);
  }

  height: 100%;
  width: 100%;
`;

class Transition extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired,
  };

  render() {
    const { children, location } = this.props;

    return (
      <TransitionGroup component={null}>
        <ReactTransition
          exit={false}
          key={location.pathname}
          timeout={{ enter: 0 }}>
          {status => <TransitionDiv status={status}>{children}</TransitionDiv>}
        </ReactTransition>
      </TransitionGroup>
    );
  }
}

export default Transition;
