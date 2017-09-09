/*
 * @flow
 */

import {Entry, type EntryId} from './entry';

export class ActorEntry extends Entry {

  name: string;
  cupSize: string;
  hairColor: string;
  country: string;
  birthday: Date;
  female: boolean;
  nickNames: Array<string>;
  imageIds: Array<EntryId>;

  constructor() {
    super("Actor");
  }

}