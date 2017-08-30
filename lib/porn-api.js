/*
 * @flow
 */

import Client from './client';

module.exports = {
  Client: Client,
  test: function(name: string):string {
    return "Hello, ${name}!";
  }
};