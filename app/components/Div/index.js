import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  min-height: 1px;

  &.card {
    margin-top: 55px;
  }

  @media only screen and (max-width: 1370px) {
    &.card {
      max-width: 800px;
    }
  }
`;

export default Div;
