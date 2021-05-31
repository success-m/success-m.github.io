import styled from 'styled-components';
import P from '../P';

const CareerText = styled(P)`
  align-self: center;
  text-align: center;
  width: 100%;
  margin: 0 auto;

  @media only screen and (max-width: 574px) {
    letter-spacing: 0;
  }
`;

export default CareerText;
