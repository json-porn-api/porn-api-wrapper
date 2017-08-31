/*
 * @flow
 */

'use strict';

const should = require('chai').should();
const fs = require('fs');
const path = require('path');
import {Response} from '../lib/response';

var getApiResponseFromFile = function(fileName: string): string {
	let filePath = path.join(__dirname, 'api-responses', fileName);
	return fs.readFileSync(filePath, "utf8");
}

describe('Response Parsing', function() {

	const responseString = getApiResponseFromFile("search.json");
	const response = Response.fromString(responseString);

  it('Parses reseponse status code', function() {
  	response.statusCode.should.equal(200);
  });

  it('Parses reseponse status message', function() {
  	response.statusMessage.should.equal("OK");
  });

  it('Parses reseponse update timestamp', function() {
  	response.lastUpdated.getTime().should.equal(1504170861504);
  });

  it('Parses reseponse content', function() {
  	response.content.length.should.equal(56);
  });

});