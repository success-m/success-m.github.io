import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavA = styled(Link)`
  color: inherit;
  text-decoration: none;
  transition: color 0.5s;

  &:hover,
  &.active {
    color: #eaa12d;
  }
`;

export default NavA;
