import React from 'react';
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring';

import Experiment from '../components/Experiment';
import OrbitHover from '../components/experiments/OrbitHover';
import Counter from '../components/experiments/Counter';
import Parallax from '../components/experiments/Parallax';

const ExperimentsContainer = styled.div`
  width: 800px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 170px;
  margin: 2rem 0;

  @media only screen and (max-width: 800px) {
    width: 100vw;
  }
`;

const Experiments = () => (
  <ExperimentsContainer>
    <Experiment>
      <OrbitHover />
    </Experiment>
    <Experiment>
      <Counter />
    </Experiment>
    <Experiment>
      <Parallax />
    </Experiment>
  </ExperimentsContainer>
);

export default Experiments;
