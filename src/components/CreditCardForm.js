import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import MaskedInput from 'react-text-mask';

const InputStyles = ({ theme }) => css`
  border: none;
  border-bottom: 3px solid #8b72e5;
  padding: 1rem 0;
  font-size: 1.5rem;
  width: 100%;
  color: ${theme.text};
  background: none;
`;

const StyledInput = styled.input`
  ${InputStyles}
`;

const SmallInputsContainer = styled.div`
  display: flex;
`;

const StyledForm = styled.form`
  display: flex;

  label {
    display: flex;
    flex-direction: column;
    color: #9b9b9b;
    font-family: 'Asap';
  }

  input {
    ${InputStyles}
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;

    & > div {
      margin-top: 3rem;
    }
  }
`;

const CreditCardForm = () => {
  const [cvc, setCvc] = useState('');
  const [expiry, setExpiry] = useState('');
  const [number, setNumber] = useState('');

  const expiryRef = useRef();
  const cvcRef = useRef();

  const handleNumberChange = (e) => {
    const { value } = e.target;

    setNumber(e.target.value);

    if (value.length === 19) {
      expiryRef.current.inputElement.focus();
    }
  };

  const handleExpiryChange = (e) => {
    const { value } = e.target;

    setExpiry(e.target.value);

    if (value.length === 5) {
      cvcRef.current.focus();
    }
  };

  /* eslint-disable jsx-a11y/label-has-for */
  /* eslint-disable jsx-a11y/label-has-associated-control */
  return (
    <StyledForm>
      <label style={{ flex: 1 }} htmlFor="number">
        Card Number
        <MaskedInput
          id="number"
          name="number"
          className="masked-input"
          value={number}
          guide={false}
          mask={[
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]}
          onChange={handleNumberChange}
          placeholder="0000 0000 0000 0000"
        />
      </label>
      <SmallInputsContainer>
        <label htmlFor="expiry">
          Expiry Date
          <MaskedInput
            id="expiry"
            name="expiry"
            value={expiry}
            className="masked-input"
            mask={[/\d/, /\d/, '/', /\d/, /\d/]}
            guide={false}
            onChange={handleExpiryChange}
            placeholder="MM/YY"
            ref={expiryRef}
          />
        </label>
        <label htmlFor="cvc">
          CVC
          <StyledInput
            id="cvc"
            name="cvc"
            value={cvc}
            type="number"
            onChange={(e) => setCvc(e.target.value)}
            placeholder="123"
            ref={cvcRef}
          />
        </label>
      </SmallInputsContainer>
    </StyledForm>
  );

  /* eslint-enable jsx-a11y/label-has-for */
  /* eslint-enable jsx-a11y/label-has-associated-control */
};

export default CreditCardForm;
