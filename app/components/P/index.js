import styled from 'styled-components';

const P = styled.p`
  font-size: 1.2em;
  line-height: 1.7em;
  letter-spacing: 0.1em;

  @media only screen and (max-width: 1200px) {
    font-size: 1.1em;
  }

  @media only screen and (max-width: 991px) {
    font-size: 1em;
  }

  @media only screen and (max-width: 767px) {
    font-size: 0.9em;
    line-height: 1.5em;
  }

  @media only screen and (max-width: 524px) {
    font-size: 0.7em;
  }
`;

export default P;
