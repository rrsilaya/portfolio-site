import * as normal from './400';
import * as normalItalic from './400-italic';
import * as medium from './500';
import * as mediumItalic from './500-italic';
import * as bold from './600';

const fontFamily = `
    @font-face {
        font-family: 'Circular';
        src: url('${normal.eot}');
        src: url('${normal.eot}#iefix') format('embedded-opentype'),
             url('${normal.woff}') format('woff'),
             url('${normal.ttf}') format('truetype'),
             url('${normal.svg}#lineto-circular-pro-book') format('svg');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Circular';
        src: url('${normalItalic.eot}');
        src: url('${normalItalic.eot}?#iefix') format('embedded-opentype'),
             url('${normalItalic.woff}') format('woff'),
             url('${normalItalic.ttf}') format('truetype'),
             url('${normalItalic.svg}#lineto-circular-pro-book') format('svg');
        font-weight: normal;
        font-style: italic;
    }

    @font-face {
        font-family: 'Circular';
        src: url('${medium.eot}');
        src: url('${medium.eot}?#iefix') format('embedded-opentype'),
             url('${medium.woff}') format('woff'),
             url('${medium.ttf}') format('truetype'),
             url('${medium.svg}#lineto-circular-pro-medium') format('svg');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Circular';
        src: url('${mediumItalic.eot}');
        src: url('${mediumItalic.eot}?#iefix') format('embedded-opentype'),
             url('${mediumItalic.woff}') format('woff'),
             url('${mediumItalic.ttf}') format('truetype'),
             url('${mediumItalic.svg}#lineto-circular-pro-mediumitalic') format('svg');
        font-weight: 500;
        font-style: italic;
    }

    @font-face {
        font-family: 'Circular';
        src: url('${bold.eot}');
        src: url('${bold.eot}?#iefix') format('embedded-opentype'),
             url('${bold.woff}') format('woff'),
             url('${bold.ttf}') format('truetype'),
             url('${bold.svg}#lineto-circular-pro-bold') format('svg');
        font-weight: bold;
        font-style: normal;
    }
`;

export default fontFamily;
