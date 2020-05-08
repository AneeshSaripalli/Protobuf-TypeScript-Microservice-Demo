// package: 
// file: Record.proto

import * as jspb from "google-protobuf";

export class Record extends jspb.Message {
  hasValid(): boolean;
  clearValid(): void;
  getValid(): Record.CorpusMap[keyof Record.CorpusMap] | undefined;
  setValid(value: Record.CorpusMap[keyof Record.CorpusMap]): void;

  clearArrList(): void;
  getArrList(): Array<number>;
  setArrList(value: Array<number>): void;
  addArr(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Record.AsObject;
  static toObject(includeInstance: boolean, msg: Record): Record.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Record, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Record;
  static deserializeBinaryFromReader(message: Record, reader: jspb.BinaryReader): Record;
}

export namespace Record {
  export type AsObject = {
    valid?: Record.CorpusMap[keyof Record.CorpusMap],
    arrList: Array<number>,
  }

  export interface CorpusMap {
    INVALID: 0;
    VALID: 1;
  }

  export const Corpus: CorpusMap;
}

