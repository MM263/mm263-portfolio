import styled from 'styled-components';

const BigName = styled.h1`
  font-size: 6rem;
  font-family: 'Permanent Marker';
  color: ${props => props.theme.black};
  margin: 0;
  position: relative;
  text-transform: uppercase;
  line-height: 1;
  &:after {
    height: 3rem;
    width: 120%;
    background-color: ${({ theme }) => theme.salmon};
    background-image: url("${({ theme }) => theme.clouds}");
    content: '';
    position: absolute;
    left: calc(0px - 10%);
    z-index: -1;
    margin-top: 2rem;
    transform: skew(-10deg);
  }
`;

export default BigName;
