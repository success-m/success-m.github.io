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
  transition: background-color 0.3s;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  &:hover,
  &.active {
    background-color: #ffce84;
    box-shadow: 0px 2px 2px #ddd;
    // border: 0;
  }

  @media only screen and (max-width: 1370px) {
    width: 90%;
    max-width: 156px;
    font-size: 1em;
    padding: 2px;
  }

  @media only screen and (max-width: 767px) {
    width: 95%;
  }

  @media only screen and (max-width: 574px) {
    border-radius: 0%;
    border: 0;
  }

  @media only screen and (max-width: 574px) {
    border-radius: 0%;
    border: 0;

    &:after {
      padding-bottom: 50%;
    }
  }
`;

export default CareerCircle;
