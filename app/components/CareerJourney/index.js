import styled from 'styled-components';

const CareerJourney = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 4em;

  @media only screen and (max-width: 767px) {
    margin-top: 1em;
  }

  @media only screen and (max-width: 574px) {
    min-width: 132px;

    & .break {
      display: none;
    }
  }
`;

export default CareerJourney;
