/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Customization of Babel
 */

const { addBabelPlugin, override } = require('customize-cra');

// Replace some configurations of Create-React-App
module.exports = override(
  addBabelPlugin(['babel-plugin-root-import', { rootPathSuffix: 'src' }])
);
