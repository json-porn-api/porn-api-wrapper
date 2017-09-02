/*
 * @flow
 */

'use strict';

const should = require('chai').should();
import mockedApiResponses from './mocked-api-responses';
import {Response} from '../lib/response';

describe('Response Parsing', function() {

  const responseString = mockedApiResponses.getString("search.json");
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