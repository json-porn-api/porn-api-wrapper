/*
 * @flow
 */

export class Response {

	statusCode: number;
	statusMessage: string;
	lastUpdated: Date;
	content: any;

  constructor() {
    
  }

  static fromJson(responseJson: any): Response {
  	let response = new Response();
  	response.statusCode = responseJson.statusCode;
  	response.statusMessage = responseJson.statusMessage;
  	response.lastUpdated = new Date(responseJson.lastUpdated);
  	response.content = responseJson.content;
  	return response;
  }

  static fromString(responseString: string): Response {
  	return Response.fromJson(JSON.parse(responseString));
  }

};