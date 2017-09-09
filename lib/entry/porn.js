/*
 * @flow
 */

import {Entry, type EntryId} from './entry';

export type PornTypeId = 1 | 2 | 3 | 4;
export type PornType = "Unknown" | "Clips" | "Photos" | "Movies";

const pornTypes: Map<PornTypeId, PornType> = new Map([
  [1, "Unknown"],
  [2, "Clips"],
  [3, "Photos"],
  [4, "Movies"]
]);

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
    super("Porn");
  }

  static getPornType(pornTypeId: PornTypeId): PornType {
    let pornType = pornTypes.get(pornTypeId);
    if (pornType == null) {
      pornType = "Unknown";
    }
    return pornType;
  }

  static getPornTypeId(pornType: PornType): PornTypeId {
    switch(pornType) {
      case "Clips": return 2;
      case "Photos": return 3;
      case "Movies": return 4;
      default: return 1;
    }
  }

}