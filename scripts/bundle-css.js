const fs = require('fs-extra');
const sass = require('node-sass');
const tildeImporter = require('node-sass-tilde-importer');
const path = require('path');

function bundleCss() {
  const result = sass.renderSync({
    file: path.resolve(__dirname, '../projects/ux/src/styles/giftdibs.scss'),
    importer: tildeImporter,
    outputStyle: 'compact',
  });

  const target = path.resolve(__dirname, '../dist/ux/css/giftdibs.css');

  fs.ensureFileSync(target);
  fs.writeFileSync(target, result.css);
}

function copyPublicScss() {
  fs.copySync(
    './projects/ux/src/styles/_public-variables.scss',
    './dist/ux/scss/_variables.scss',
  );
  fs.copySync(
    './projects/ux/src/styles/_public-mixins.scss',
    './dist/ux/scss/_mixins.scss',
  );
}

bundleCss();
copyPublicScss();
