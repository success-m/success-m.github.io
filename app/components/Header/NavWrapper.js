import styled from 'styled-components';

const NavWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 991px) {
    justify-content: center;
  }

  @media only screen and (max-width: 500px) {
    & li:first-child {
      display: none;
    }
  }
`;

export default NavWrapper;
