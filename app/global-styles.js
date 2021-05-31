import { createGlobalStyle } from 'styled-components';
import XL from './images/XL-overlay.png';
import LG from './images/LG-overlay.png';
import XS from './images/XS-overlay.png';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

#app{
  background-color: #264653;
  font-family: 'Poppins', sans-serif;
}

#app #main-wrapper{
  background: url(${XL}) bottom center no-repeat;
  background-attachment: fixed;
}

@media (max-width: 1200px) {
  #app #main-wrapper{
    background: url(${LG}) bottom center no-repeat;
    background-attachment: fixed;
  }
}

@media (max-width: 576px) {
  #app #main-wrapper{
    background: url(${XS}) bottom center no-repeat;
    background-attachment: fixed;
  }
}
`;

export default GlobalStyle;
