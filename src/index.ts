import express from 'express';
import { SearchRequest } from './protobufs/compiled/Test_pb'

const app: express.Application = express();

const type: SearchRequest = new SearchRequest();
type.setPageNumber(10);
type.setQuery('More content');

console.log(type.serializeBinary());

app.listen(8000, () => {
    console.log("Starting express server on port 8000")
})