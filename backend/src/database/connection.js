const knex = require('knex');
const { request } = require('express');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;