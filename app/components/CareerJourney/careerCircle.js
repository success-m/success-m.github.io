import styled from 'styled-components';

const CareerCircle = styled.div`
  display: flex;
  position: relative;
  text-align: center;
  width: 80%;
  border-radius: 50%;
  border: 2px solid #ddd;
  margin: 0 auto;
  font-size: 1.1em;
  padding: 10%;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  &:hover,
  &.active {
    background-color: #ffce84;
    border: 0;
  }

  @media only screen and (max-width: 991px) {
    width: 90%;
    font-size: 1em;
    padding: 2px;
  }

  @media only screen and (max-width: 767px) {
    width: 95%;
    // border-radius: 0%;
    // border: 0;
    font-size: 0.8em;
    padding: 2px;
  }

  @media only screen and (max-width: 574px) {
    border-radius: 0%;
    border: 0;
  }
`;

export default CareerCircle;
