import styled from 'styled-components';

const FullH1 = styled.h1`
  font-size: 1.7em;
  font-weight: normal;

  @media only screen and (max-width: 1200px) {
    font-size: 1.4em;
  }

  @media only screen and (max-width: 991px) {
    font-size: 1.2em;
    margin: 1.2em 0;
  }

  @media only screen and (max-width: 767px) {
    font-size: 1.1em;
  }

  @media only screen and (max-width: 524px) {
    font-size: 1em;
  }
`;

export default FullH1;
