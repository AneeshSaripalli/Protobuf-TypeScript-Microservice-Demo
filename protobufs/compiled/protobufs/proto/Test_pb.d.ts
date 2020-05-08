// package: 
// file: protobufs/proto/Test.proto

import * as jspb from "google-protobuf";

export class SearchRequest extends jspb.Message {
  hasQuery(): boolean;
  clearQuery(): void;
  getQuery(): string | undefined;
  setQuery(value: string): void;

  hasPageNumber(): boolean;
  clearPageNumber(): void;
  getPageNumber(): number | undefined;
  setPageNumber(value: number): void;

  hasResultsPerPage(): boolean;
  clearResultsPerPage(): void;
  getResultsPerPage(): number | undefined;
  setResultsPerPage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchRequest): SearchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchRequest;
  static deserializeBinaryFromReader(message: SearchRequest, reader: jspb.BinaryReader): SearchRequest;
}

export namespace SearchRequest {
  export type AsObject = {
    query?: string,
    pageNumber?: number,
    resultsPerPage?: number,
  }
}

