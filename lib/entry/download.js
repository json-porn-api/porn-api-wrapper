/*
 * @flow
 */

import {Entry, type EntryId} from './entry';

export type DownloadType = 1 | 2 | 3 | 4;

export class DownloadEntry extends Entry {

  url: string;
  fileSize: number;
  hosterId: EntryId;

  constructor() {
    super("Download");
  }

}