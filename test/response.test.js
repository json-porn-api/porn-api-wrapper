/*
 * @flow
 */

'use strict';

var should = require('chai').should();
var {Response} = require('../lib/response');

describe('Response Parsing', function() {

	const responseString = "{\r\n    \"statusCode\": 200,\r\n    \"statusMessage\": \"OK\",\r\n    \"lastUpdated\": 1504128373543,\r\n    \"content\": []\r\n}";
	const response = Response.fromString(responseString);

  it('Parses reseponse status code', function() {
  	response.statusCode.should.equal(200);
  });

  it('Parses reseponse status message', function() {
  	response.statusMessage.should.equal("OK");
  });

  it('Parses reseponse update timestamp', function() {
  	response.lastUpdated.getTime().should.equal(1504128373543);
  });

  it('Parses reseponse content', function() {
  	response.content.length.should.equal(0);
  });

});