import styled from '@emotion/styled';

const InfoLine = styled.p`
  color: ${({ theme }) => theme.grey};
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
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
