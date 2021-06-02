/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';

const HalfHeight = styled.div`
  min-height: calc(50vh);

  @media only screen and (max-width: 1370px) {
    min-height: 500px !important;
  }

  @media only screen and (max-width: 767px) {
    min-height: 400px !important;
  }

  @media only screen and (max-width: 524px) {
    min-height: 200px !important;
  }
`;

export default HalfHeight;
