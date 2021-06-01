import styled from 'styled-components';

const FreeTimeBox = styled.div`
  width: 22%;
  text-align: center;
  font-size: 1.1em;
  min-width: 230px;
  margin: 1%;

  &.not-big-data {
    min-width: 100px;
    max-width: 156px;
    margin: 2%;
  }

  & img {
    width: 100%;
    transition: margin 0.5s;
  }

  & img:hover {
    margin-top: -5px;
    margin-bottom: 5px;
  }

  @media only screen and (max-width: 767px) {
    &.not-big-data p {
      font-size: 0.8em;
    }
  }

  @media only screen and (max-width: 524px) {
    width: 45%;
    min-width: 80px;
    font-size: 0.8em;

    &.not-big-data {
      width: 100%;
      min-width: 60px;
      max-width: 80px;
    }
  }
`;

export default FreeTimeBox;
