import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavA = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    font-weight: bold;
    font-style: italic;
  }
`;

export default NavA;
