/*
 * @flow
 */

'use strict';

import {Client} from './client';
//import {Request} from './request';
//import {Response} from './response';

module.exports = {
  Client: Client,
  greeting: function(name: string):string {
    return `Hello, ${name}!`;
  }
};