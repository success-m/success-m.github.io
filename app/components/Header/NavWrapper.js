import styled from 'styled-components';

const NavWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: end;
  height: 100%;
  margin: 0;
  padding: 0;

  // @media only screen and (max-width: 991px) {
  //   flex-direction: column;
  // }
`;

export default NavWrapper;
