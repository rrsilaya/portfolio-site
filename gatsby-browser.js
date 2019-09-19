import React, { Fragment } from 'react';
import GlobalStyle from './src/styles';

export const wrapRootElement = ({ element }) => (
    <Fragment>
        <GlobalStyle />
        {element}
    </Fragment>
);
