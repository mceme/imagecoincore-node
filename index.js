'use strict';

module.exports = require('./lib');
module.exports.Node = require('./lib/node');
module.exports.Service = require('./lib/service');
module.exports.errors = require('./lib/errors');

module.exports.services = {};
module.exports.services.Axe = require('./lib/services/ImageCoind');
module.exports.services.Web = require('./lib/services/web');

module.exports.scaffold = {};
module.exports.scaffold.create = require('./lib/scaffold/create');
module.exports.scaffold.add = require('./lib/scaffold/add');
module.exports.scaffold.remove = require('./lib/scaffold/remove');
module.exports.scaffold.start = require('./lib/scaffold/start');
module.exports.scaffold.callMethod = require('./lib/scaffold/call-method');
module.exports.scaffold.findConfig = require('./lib/scaffold/find-config');
module.exports.scaffold.defaultConfig = require('./lib/scaffold/default-config');

module.exports.cli = {};
module.exports.cli.main = require('./lib/cli/main');
module.exports.cli.daemon = require('./lib/cli/daemon');
module.exports.cli.imagecoincore = require('./lib/cli/imagecoincore');
module.exports.cli.ImageCoind = require('./lib/cli/ImageCoind');

module.exports.lib = require('@mceme/imagecoin-lib');
