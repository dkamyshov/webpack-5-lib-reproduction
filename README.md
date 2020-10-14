# webpack-5-lib-reproduction

| Step | Webpack version | Command                                                     | `dist/lib.js`                                                            | `dist/lib.js.map`                                                    |
| ---- | --------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| 1    | ^4              | `$ yarn`                                                    | As expected: `module.exports = ...;`                                     | Paths include library name: `webpack://MyCoolLibrary/./src/index.js` |
| 2    | ^5              | `$ yarn add webpack@^5`                                     | ⚠️ Exports are behind a namespace: `module.exports.MyCoolLibrary = ...;` | Paths include library name: `webpack://MyCoolLibrary/./src/index.js` |
| 3    | ^5              | `$ yarn no-name` (runs webpack@^5 without `output.library`) | As expected: `module.exports = ...;`                                     | ⚠️ Paths do not include library name: `webpack:///./src/index.js`    |
