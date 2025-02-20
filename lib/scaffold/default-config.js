'use strict';

var path = require('path');
var mkdirp = require('mkdirp');
var fs = require('fs');

/**
 * Will return the path and default axecore-node configuration. It will search for the
 * configuration file in the "~/.axecore" directory, and if it doesn't exist, it will create one
 * based on default settings.
 * @param {Object} [options]
 * @param {Array} [options.additionalServices] - An optional array of services.
 */
function getDefaultConfig(options) {
  /* jshint maxstatements: 40 */
  if (!options) {
    options = {};
  }

  var defaultPath = path.resolve(process.env.HOME, './.imagecoincore');
  var defaultConfigFile = path.resolve(defaultPath, './imagecoin-node.json');

  if (!fs.existsSync(defaultPath)) {
    mkdirp.sync(defaultPath);
  }

  var defaultServices = ['ImageCoind', '@mceme/insight-api', '@mceme/insight-ui', 'web'];
  if (options.additionalServices) {
    defaultServices = defaultServices.concat(options.additionalServices);
  }

  if (!fs.existsSync(defaultConfigFile)) {

    var defaultConfig = {
      network: 'livenet',
      port: 3003,
      services: defaultServices,
      servicesConfig: {
        ImageCoind: {
          connect: [{
            rpchost: '127.0.0.1',
            rpcport: 6999,
            rpcuser: 'img',
            rpcpassword: 'local321',
            zmqpubrawtx: 'tcp://127.0.0.1:28332'
          }]
        }
      }
    };
    fs.writeFileSync(defaultConfigFile, JSON.stringify(defaultConfig, null, 2));
  }

  var defaultDataDir = path.resolve(defaultPath, './data');

  if (!fs.existsSync(defaultDataDir)) {
    mkdirp.sync(defaultDataDir);
  }

  var config = JSON.parse(fs.readFileSync(defaultConfigFile, 'utf-8'));

  return {
    path: defaultPath,
    config: config
  };

}

module.exports = getDefaultConfig;
