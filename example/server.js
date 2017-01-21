'use strict';

var Hapi = require('hapi');
var pg = require('pg');
var Notify = require('../lib/index.js');

function init (config, callback) {
  var server = new Hapi.Server();
  var pool = new pg.Pool(config.pg);
  var optionsNotify = {
    reset: true,
    pool: pool
  };

  pool.on('error', function () {
    console.log('Pool error'); // eslint-disable-line
  });

  server.connection({ port: config.port });

  server.register({
    register: Notify,
    options: optionsNotify
  }, function (errorNotify) {
    if (errorNotify) {
      console.log('error register Notify'); // eslint-disable-line

      return callback(errorNotify);
    }
    server.route([
      {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
          return reply('hello');
        }
      }
    ]);

    return server.start(function (errorStart) {
      return callback(errorStart, server);
    });
  });
}

module.exports = init;
