import styled from '@emotion/styled';

const InfoLine = styled.p`
  color: ${({ theme }) => theme.grey};
  font-size: 1.2rem;
  svg {
    height: 1.3rem;
    width: 1.3rem;
    margin-bottom: -0.3rem;
    margin-right: 0.7rem;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.grey};
  }
`;

export default InfoLine;
