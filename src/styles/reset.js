import { colors, fontStack } from './constants';

const cssReset = `
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        font-family: ${fontStack.body}, ${fontStack.fallback};
        outline: none;
    }

    html,
    body {
        min-height: 100%;
        margin: 0;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;
    }

    html {
        font-family: ${fontStack.body}, ${fontStack.fallback};
        font-size: 100%;
    }

    body {
        overflow-x: hidden;
        color: ${colors.textColor};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
        padding: 0;
    }

    ul,
    ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        text-decoration: none;
        color: ${colors.linkColor};
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }

    figure {
        margin: 0;
    }

    img {
        display: block;
        max-width: 100%;
        pointer-events: none;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        margin: 0;
        font-size: 100%;
        line-height: 1.15;
        font-family: ${fontStack.body}, ${fontStack.fallback};
    }

    button {
        cursor: pointer;
    }
`;

export default cssReset;
