import { Link } from 'react-router-dom';
import styled from 'styled-components';

// const Language = styled.span`
//   position: fixed;
//   top: 10px;
//   right: 45px;
// `;

const More = styled(Link)`
  text-align: center;
  width: 200px;
  color: #fff;
  padding: 8px;
  margin: 0 auto;
  display: block;
  border-radius: 5px;
  background-color: #ffbf5d;
  text-decoration: None;
  font-size: 1.2em;
  line-height: 1.7em;
  letter-spacing: 0.1em;
  transition: margin 0.3s, background-color 0.3s;

  &:hover {
    background-color: #6698ab;
    box-shadow: 0 2px #ddd;
    margin-top: -2px;
    margin-bottom: 2px;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 1em;
  }

  @media only screen and (max-width: 991px) {
    font-size: 0.8em;
    width: 120px;
  }
`;

export default More;
