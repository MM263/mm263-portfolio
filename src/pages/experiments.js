import React from 'react';
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring';

import Experiment from '../components/Experiment';
import OrbitHover from '../components/experiments/OrbitHover';
import Counter from '../components/experiments/Counter';

const ExperimentsContainer = styled.div`
  width: 800px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 170px;
  margin: 2rem 0;
`;

const Experiments = () => (
  <ExperimentsContainer>
    <Experiment>
      <OrbitHover />
    </Experiment>
    <Experiment>
      <Counter />
    </Experiment>
  </ExperimentsContainer>
);

export default Experiments;
