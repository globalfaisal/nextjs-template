// lint-staged.config.js
module.exports = {
  // this will check Typescript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // This will lint and format TypeScript and JavaScript files
  '**/*.(ts|tsx|js|jsx)': ['eslint', 'prettier'],

  // this will Format MarkDown and JSON
  '**/*.(md|json|yml|yaml)': ['prettier'],
};
