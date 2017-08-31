/*
 * @flow
 */

'use strict';

var should = require('chai').should();
var {Response} = require('../lib/response');

describe('Response', function() {
  it('Parses reseponse object from string', function() {
  	let responseString = "{\r\n    \"statusCode\": 200,\r\n    \"statusMessage\": \"OK\",\r\n    \"lastUpdated\": 1504128373543,\r\n    \"content\": []\r\n}";
  	//console.log(`Parsing response string:\n${responseString}`);
  	let response = Response.fromString(responseString);
  	//console.log(`Parsed response object:\n${response.statusCode}`);
  	response.statusCode.should.equal(200);
  	response.statusMessage.should.equal("OK");
  	response.lastUpdated.getTime().should.equal(1504128373543);
  	response.content.length.should.equal(0);
  });
});