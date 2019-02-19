import React from 'react';
import styled from 'styled-components';

import photo from '../../static/photo.png';

const BioContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 7rem;
    height: 7rem;
    flex-shrink: 0;
    margin-right: 5rem;
  }
  p {
    margin: 0;
  }
`;

const Bio = () => (
  <BioContainer>
    <img
      src={photo}
      alt="Tony Antonov, me. This is a best shot of me, most times I am just making faces on camera."
    />
    <div>
      <p>Tony Antonov's personal blog.</p>
      <p>When I have free time I write about frontend.</p>
    </div>
  </BioContainer>
);

export default Bio;
