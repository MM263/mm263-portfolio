import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ExperimentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 170px;
  justify-content: center;
  align-items: center;
`;

const Experiment = ({ children }) => (
  <ExperimentContainer>{children}</ExperimentContainer>
);

Experiment.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Experiment;
