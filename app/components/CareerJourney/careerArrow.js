import styled from 'styled-components';

const CareerArrow = styled.img`
  text-align: center;
  width: 5%;

  &.top-arrow {
    transform: rotate(180deg);
  }

  &.mid-arrow {
    transform: rotate(-90deg);
    margin-right: 16%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 1370px) {
    &.mid-arrow {
      margin-right: 26%;
    }
  }

  @media only screen and (max-width: 1199px) {
    &.mid-arrow {
      margin-right: 23%;
    }
  }

  @media only screen and (max-width: 991px) {
    &.mid-arrow {
      margin-right: 16%;
    }
  }

  @media only screen and (max-width: 574px) {
    display: none;
  }
`;

export default CareerArrow;
