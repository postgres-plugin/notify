'use strict';

var query = require('pg-helpers').query;
var initialiseQuery = require('./helpers/initialise-query.js');

function register (server, options, next) {
  var pool = options.pool;
  var initQuery = initialiseQuery(options);

  // initiliase data function
  query(initQuery, pool, function (initErr) {
    return next(initErr);
  });
}

register.attributes = { name: 'notify' };

module.exports = register;
