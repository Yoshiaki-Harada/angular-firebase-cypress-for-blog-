const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor')
const admin = require("firebase-admin");
const cypressFirebasePlugin = require("cypress-firebase").plugin

module.exports = (on, config) => {
  on('file:preprocessor', cypressTypeScriptPreprocessor)
  const extendedConfig = cypressFirebasePlugin(on, config, admin);


  return extendedConfig;
}
