const path = require('path');

const plugins = [
    {
        resolve: 'gatsby-plugin-root-import',
        options: {
            '@common': path.join(__dirname, 'src/@common'),
        },
    },
    'gatsby-plugin-react-helmet',
];

module.exports = {
    siteMetadata: {
        title: 'Ralph Lawrence Silaya',
    },
    plugins,
};
