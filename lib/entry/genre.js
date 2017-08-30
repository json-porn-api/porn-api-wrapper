/*
 * @flow
 */

import {Entry, type EntryId} from './entry';

export class GenreEntry extends Entry {

  name: string;
  pornEntryCount: number;
  lastPornEntryId: EntryId;
  lastPornEntryDate: Date;
  parentGenreIds: Array<EntryId>;

  constructor() {
    
  }

}