const { Client } = require('@elastic/elasticsearch');
const esClientOptions = require('./esClientOptions');
const settings = require('pelias-config').generate();

module.exports = function(){
  return new Client( esClientOptions( settings.esclient ) );
};
