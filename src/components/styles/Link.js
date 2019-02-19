import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

const styles = css`
  font-weight: 900;
  color: ${props => props.theme.text};
  text-decoration: none;
  position: relative;
  font-size: ${({ mini }) => (mini ? '1.5rem' : '1.6rem')};
  font-style: italic;
  text-transform: ${({ mini }) => (mini ? 'none' : 'uppercase')};
  &:after {
    height: ${({ mini }) => (mini ? '0.8rem' : '1.4rem')};
    width: ${({ mini }) => (mini ? '101%' : '120%')};
    background: ${({ theme }) => theme.accentBG};
    content: '';
    position: absolute;
    transition: background 0.2s;
    left: ${({ mini }) => (mini ? 'calc(0px - 3%)' : 'calc(0px - 12%)')};
    margin-top: 1.6rem;
    z-index: -1;
  }
  &:hover,
  &:focus {
    &:after {
      background-color: ${({ theme }) => theme.salmoner};
    }
  }
`;

const StyledLink = styled(Link)`
  ${styles}
`;
const StyledATag = styled.a`
  ${styles}
`;

export { StyledATag };
export default StyledLink;
