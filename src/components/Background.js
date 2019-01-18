import React, { Component } from 'react';
import styled from 'styled-components';

import Switch from './Switch';
import Canvas from './Canvas';

const StyledBGContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 500;
  top: 0;
  left: 0;
`;

class Background extends Component {
  state = {
    fun: true,
  };

  handleDisableFun = () => {
    const { fun } = this.state;

    this.setState({ fun: !fun });
  };

  render() {
    const { fun } = this.state;

    return (
      <StyledBGContainer>
        <Switch value={fun} onChange={this.handleDisableFun} />
        {fun && <Canvas />}
      </StyledBGContainer>
    );
  }
}

export default Background;
