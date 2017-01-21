'use strict';

var path = require('path');
var fs = require('fs');
var dropFile = path.resolve(__dirname, '../schema/drop-tables.sql');
var createTablesFile = path.resolve(__dirname, '../schema/create-tables.sql');
var dropTables = fs.readFileSync(dropFile, 'utf8').toString();
var createTables = fs.readFileSync(createTablesFile, 'utf8').toString();

module.exports = function (options) {
  var query = '';

  if (options.reset) {
    query += dropTables;
    query += createTables;

    return query;
  }

  return createTables;
};
