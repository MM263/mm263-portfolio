import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFunSwitch = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  cursor: pointer;
  user-select: none;
  .fun-label {
    position: absolute;
    top: 0;
    left: -30px;
    text-transform: uppercase;
    display: flex;
    font-size: 2rem;
    line-height: 1.5;
  }
  .on-label,
  .off-label {
    position: absolute;
    font-weight: bold;
    z-index: 2;
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 1;
    top: 8px;
    font-family: 'Permanent Marker';
  }
  .on-label {
    right: 11px;
  }
  .off-label {
    left: 9px;
  }
  .fun-toggle-label {
    position: relative;
    width: 70px;
    height: 26px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.bg};
  }
  .fun-toggle-label > input {
    width: 0;
    height: 0;
    opacity: 0;
  }
  .switch {
    height: 2.6rem;
    width: 3.5rem;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1;
    border-radius: ${({ checked }) =>
      checked ? '0 0.5rem 0.5rem 0' : '0.5rem 0 0 0.5rem'};
    background-color: ${({ theme, checked }) =>
      checked ? theme.yellow : theme.salmon};
    transform: ${({ checked }) =>
      checked ? 'translateX(35px)' : 'translateX(0px)'};
    transition: all 0.5s ${({ theme }) => theme.ease};
  }
`;

class FunSwitch extends React.PureComponent {
  static propTypes = {
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  handleToggle = () => {
    const { value, onChange } = this.props;

    onChange(!value);
  };

  render() {
    const { value } = this.props;

    return (
      <StyledFunSwitch checked={value}>
        <label className="fun-toggle-label" htmlFor="fun-toggle">
          <input
            onChange={this.handleToggle}
            type="checkbox"
            id="fun-toggle"
            value={value}
            aria-checked={value}
          />
          <span className="fun-label">🤔</span>
          <span className="off-label">Off</span>
          <span className="on-label">On</span>
          <div className="switch" />
        </label>
      </StyledFunSwitch>
    );
  }
}

export default FunSwitch;
