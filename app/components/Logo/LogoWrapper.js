import styled from 'styled-components';

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;

  & a {
    text-decoration: none;
    color: inherit;
  }

  & a:hover .box-logo {
    background-color: #eaa12d;
  }

  @media only screen and (max-width: 991px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 767px) {
    & a {
      margin-top: 5px;
    }
  }
`;

export default LogoWrapper;
