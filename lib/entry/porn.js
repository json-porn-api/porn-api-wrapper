/*
 * @flow
 */

import {Entry, type EntryId} from './entry';

export type PornType = 1 | 2 | 3 | 4;

export class PornEntry extends Entry {

  name: string;
  description: string;
  type: PornType;
  publishDate: Date;
  sourceUrl: string;
  producerId: EntryId;
  genreIds: Array<EntryId>;
  imageIds: Array<EntryId>;
  actorIds: Array<EntryId>;

  constructor() {
    
  }

}