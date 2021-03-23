import * as React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group';

import Bow from '../images/bow.svg';

const FedorContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const Gift = styled.h1`
  font-size: 4em;
  font-weight: bolder;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: red;
`;

const Packaging = styled.button`
  height: 15em;
  width: 15em;
  background-color: #ffa1ea;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%236200ff' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  border-radius: 5%;
  position: relative;
  border: none;
  outline: none;
  transition: transform 0.9s;
  overflow: visible;

  &:hover {
    transform: translateY(-20px);
  }
`;

const StripeVertical = styled.div`
  width: 3em;
  height: 15em;
  background: aquamarine;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
`;

const StripeHorizontal = styled.div`
  width: 15em;
  height: 3em;
  background: aquamarine;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  position: absolute;
`;

const StyledBow = styled(Bow)`
  position: absolute;
  height: 8em;
  width: 8em;
  top: -3em;
  left: 50%;
  transform: translateX(-50%);
`;

const TransitionDiv = styled.div`
  position: absolute;
  z-index: 1000;
  transform: ${({ status }) =>
    status === 'entering' ? 'scale(0)' : 'scale(1)'};
  transition: transform 0.5s;

  height: 100%;
  width: 100%;
`;

const Surprise = styled.h3`
  font-size: 30px;
`;
class Transition extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;

    return (
      <TransitionGroup component={null}>
        <ReactTransition exit={false} timeout={{ enter: 0 }}>
          {status => <TransitionDiv status={status}>{children}</TransitionDiv>}
        </ReactTransition>
      </TransitionGroup>
    );
  }
}

const Fedor = () => {
  const [showSurprise, setShowSurprise] = React.useState(false);
  console.log(showSurprise);
  return showSurprise ? (
    <Surprise>ты пидАр</Surprise>
  ) : (
    <FedorContainer>
      <Packaging onClick={() => setShowSurprise(true)}>
        <StripeVertical />
        <StripeHorizontal />
        <StyledBow />
        {showSurprise && (
          <Transition>
            <Gift />
          </Transition>
        )}
      </Packaging>
    </FedorContainer>
  );
};

export default Fedor;
