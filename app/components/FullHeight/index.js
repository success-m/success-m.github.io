/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';

const FullHeight = styled.div`
  min-height: calc(100vh);
  padding-top: 10%;
  padding-bottom: 10%;

  @media only screen and (max-width: 1200px) {
    min-height: 500px !important;
  }

  @media only screen and (max-width: 767px) {
    min-height: 400px !important;
  }

  @media only screen and (max-width: 524px) {
    min-height: 200px !important;
  }
`;

export default FullHeight;
