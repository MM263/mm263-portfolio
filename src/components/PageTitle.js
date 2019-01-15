import React from 'react';
import PropTypes from 'prop-types';

import BigName from './styles/BigName';
import BackButton from './BackButton';

const PageTitle = ({ children }) => (
  <div>
    <BigName>{children}</BigName>
    <BackButton />
  </div>
);

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTitle;
