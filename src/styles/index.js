import { createGlobalStyle } from 'styled-components';

import fontFamily from './fonts';
import cssReset from './reset';

const GlobalStyle = createGlobalStyle`
    ${fontFamily}
    ${cssReset}
`;

export default GlobalStyle;
