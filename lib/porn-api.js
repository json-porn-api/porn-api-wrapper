/*
 * @flow
 */

import PornApiClient from './porn-api-client';

module.exports = {
  Client: PornApiClient,
  test: function(name: string):string {
    return "Hello, ${name}!";
  }
};