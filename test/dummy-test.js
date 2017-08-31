/*
 * @flow
 */

'use strict';

var should = require('chai').should();
var pornApi = require('../lib/porn-api');

describe('Porn API', function() {
  it('greeting', function() {
  	let name = "Tester";
  	let dummyText = pornApi.greeting(name);
    dummyText.should.equal(`Hello, ${name}!`);
  });
});