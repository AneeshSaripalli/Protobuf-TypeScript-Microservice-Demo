import axios, { AxiosResponse } from 'axios';
import express from 'express';
import { SearchRequest } from './protobufs/Test_pb'
import { Record } from './protobufs/Record_pb';

const app: express.Application = express();


const MS2_LOG = (...body: any[]): void => {
    console.log(body.join(' '));
}

app.get('/api/serialize', (request: express.Request, response: express.Response) => {
    const type: SearchRequest = new SearchRequest();
    type.setPageNumber(10);
    type.setQuery('More content');

    const buffer: Buffer = Buffer.from(type.serializeBinary());

    response.status(200).send(buffer.toString('base64'));
});

app.listen(8000, () => {
    console.log("Starting express server on port 8000")
})

// --- query other service --- //
axios.get('http://localhost:8001/api/serialize')
    .then((response: AxiosResponse<Uint8Array>) => {
        const data: Uint8Array = response.data;
        const record: Record = Record.deserializeBinary(data);

        MS2_LOG('Record arr field', record.getArrList());
    });