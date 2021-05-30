import { createGlobalStyle } from 'styled-components';
import XL from './images/XL-overlay.png';

const GlobalStyle = createGlobalStyle`
#app{
  background-color: #264653;
}
#app #main-wrapper{
  // display:none;
  background: url(${XL}) bottom center no-repeat;
  background-attachment: fixed;
}

.header-logo{
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
}

.header-logo a.logo {
  text-decoration:none;
  color:inherit;
}

@media only screen and (max-width: 991px) {
  .header-logo{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
}
`;

export default GlobalStyle;
