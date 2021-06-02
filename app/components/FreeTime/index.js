import styled from 'styled-components';

const FreeTime = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 4em;

  @media only screen and (max-width: 1370px) {
    max-width: 960px !important;
  }
`;

export default FreeTime;
