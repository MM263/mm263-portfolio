import React from 'react';
import PropTypes from 'prop-types';

import BigName from './styles/BigName';
import BackButton from './BackButton';

const PageTitle = ({ children, to, text }) => (
  <div>
    <BigName>{children}</BigName>
    <BackButton to={to} text={text} />
  </div>
);

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default PageTitle;
