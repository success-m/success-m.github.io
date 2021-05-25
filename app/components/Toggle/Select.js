import styled from 'styled-components';

const Select = styled.select`
  background-color: transparent;
  min-width: 28px;
  color: inherit;
  cursor: pointer;
  border-style: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; /* Remove default arrow */
  //background-image: url(...);   /* Add custom arrow */

  &:focus-visible,
  &:focus,
  &:active {
    outline: transparent;
  }

  &:hover {
    font-weight: bold;
    font-style: italic;
  }
`;

export default Select;
