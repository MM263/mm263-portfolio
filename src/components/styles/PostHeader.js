import styled, { css } from 'styled-components';

const HeaderStyles = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin-bottom: 1rem;
  transition: color 0.5s ${({ theme }) => theme.ease} background 0.5s
    ${({ theme }) => theme.ease};

  .post-title {
    margin: 0;
    font-family: 'Permanent Marker';
    color: ${({ theme }) => theme.text};
    line-height: 1;
    font-size: 2.7rem;
    display: block;
    text-transform: uppercase;
    text-decoration: none;

    a {
      color: ${({ theme }) => theme.text};
      text-decoration: none;
    }
  }

  .underline {
    display: flex;
    align-items: center;
  }

  .post-date {
    margin: 0;
    margin: 1rem 1rem 1.3rem 0;
    font-style: italic;
    font-weight: 900;
  }

  .separator {
    flex: 1;
    height: 2px;
    flex-shrink: 0;
    width: 100%;
    margin: 1rem 0 1rem 1rem;
    background: ${({ theme }) => theme.accentBG};
  }
`;

const HeaderDiv = styled.div`
  ${HeaderStyles}
`;

const Header = styled.header`
  ${HeaderStyles}
`;

export { HeaderDiv, Header };
