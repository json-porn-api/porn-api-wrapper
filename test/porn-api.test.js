/*
 * @flow
 */

'use strict';

var should = require('chai').should();
var PornApi = require('../lib/porn-api');

describe('Porn API', function() {
  it('greeting', function() {
  	let name = "Tester";
  	let greeting = PornApi.greeting(name);
    greeting.should.equal(`Hello, ${name}!`);
  });
});