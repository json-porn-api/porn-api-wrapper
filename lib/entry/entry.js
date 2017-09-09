/*
 * @flow
 */

export type EntryId = number;

export type EntryTypeId = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type EntryType = "Unknown" | "Actor" | "Porn" | "Image" | "Download" | "Producer" | "Genre" | "Parser" | "Hoster";

const entryTypes: Map<EntryTypeId, EntryType> = new Map([
  [0, "Unknown"],
  [1, "Actor"],
  [2, "Porn"],
  [3, "Image"],
  [4, "Download"],
  [5, "Producer"],
  [6, "Genre"],
  [7, "Parser"],
  [8, "Hoster"]
]);

export class Entry {

  id: EntryId;
  type: EntryType;

  constructor(type: EntryType) {
    this.type = type;
  }

  static getEntryType(entryTypeId: EntryTypeId): EntryType {
    let entryType = entryTypes.get(entryTypeId);
    if (entryType == null) {
      entryType = "Unknown";
    }
    return entryType;
  }

  static getEntryTypeId(pornType: EntryType): EntryTypeId {
    switch(pornType) {
      case "Actor": return 1;
      case "Porn": return 2;
      case "Image": return 3;
      case "Download": return 4;
      case "Producer": return 5;
      case "Genre": return 6;
      case "Parser": return 7;
      case "Hoster": return 8;
      default: return 0;
    }
  }

};
