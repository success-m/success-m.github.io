import styled from 'styled-components';

const FreeTimeBox = styled.div`
  width: 22%;
  text-align: center;
  font-size: 1.1em;
  min-width: 230px;
  margin: 1%;

  & img {
    width: 100%;
    transition: margin 0.5s;
  }

  & img:hover {
    margin-top: -5px;
    margin-bottom: 5px;
  }

  @media only screen and (max-width: 524px) {
    width: 45%;
    min-width: 80px;
    font-size: 0.8em;
  }
`;

export default FreeTimeBox;
