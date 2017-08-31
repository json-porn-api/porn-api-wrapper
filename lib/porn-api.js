/*
 * @flow
 */

'use strict';

import Client from './client';

module.exports = {
  Client: Client,
  greeting: function(name: string):string {
    return `Hello, ${name}!`;
  }
};