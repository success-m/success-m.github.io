import styled from 'styled-components';

const MenuToggle = styled.span`
  font-weight: bold;
  // position: fixed;
  // top: 15px;
  // left: 25px;
  display: none;
  cursor: pointer;
  // z-index: 999999;
  // border: 1px solid #3e3b3b;
  // border-radius: 3px;
  // padding: 5px;

  @media only screen and (max-width: 991px) {
    // display: block;

    &:hover {
      font-size: 1.15em;
    }
  }
`;

export default MenuToggle;
