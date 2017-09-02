/*
 * @flow
 */

'use strict';

const fs = require('fs');
const path = require('path');
import {Response} from '../lib/response';

var loadedResponseStrings:Map<string, string> = new Map();
var loadedResponses:Map<string, Response> = new Map();

/**
 * Reads the content of the file with the specified name from the `./api-responses/` directory.
 * 
 * @param  {string} fileName - name of the file to read, including extension
 * @return {string} the file's content
 */
var loadStringFromFile = function(fileName: string): string {
  let filePath = path.join(__dirname, 'api-responses', fileName);
  return fs.readFileSync(filePath, "utf8");
}

/**
 * Reads the content of the file with the specified name from the `./api-responses/` directory.
 * 
 * @param  {string} fileName - name of the file to read, including extension
 * @return {string} the file's content
 */
var getString = function(fileName: string): string {
  if (!loadedResponseStrings.has(fileName)) {
    loadedResponseStrings.set(fileName, loadStringFromFile(fileName));
  }
  let responseString = loadedResponseStrings.get(fileName);
  if (responseString == null) {
    throw `Attemted to get non existent response: ${fileName}`;
  }
  return responseString;
}

/**
 * Reads the content of the file with the specified name from the `./api-responses/` directory
 * and creates a new Response object from it.
 * 
 * @param  {string} fileName - name of the file to read, including extension
 * @return {Response} the Response parsed from the file's content
 */
var get = function(fileName: string): Response {
  if (!loadedResponses.has(fileName)) {
    let responseString = getString(fileName);
    loadedResponses.set(fileName, Response.fromString(responseString));
  }
  let response = loadedResponses.get(fileName);
  if (response == null) {
    throw `Attemted to get non existent response: ${fileName}`;
  }
  return response;
}

module.exports = {
  get: get,
  getString: getString
}