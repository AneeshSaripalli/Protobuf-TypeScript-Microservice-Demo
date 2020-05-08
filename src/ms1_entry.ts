import axios, { AxiosResponse } from 'axios';
import { SearchRequest } from './protobufs/Test_pb';
import { Record } from './protobufs/Record_pb';
import express from 'express';

const app = express();
app.get('/api/serialize', (request: express.Request, response: express.Response) => {
    const rec: Record = new Record();
    rec.setArrList([10, 15, 20]);

    const buffer: Buffer = Buffer.from(rec.serializeBinary());

    response.status(200).send(buffer.toString('base64'));
});

app.listen(8001, () => {
    console.log("Starting express server on port 8001")
})

// --- query other service -- // 

axios.get('http://localhost:8000/api/serialize').then((response: AxiosResponse<Uint8Array>) => {
    const dataBuffer = response.data;
    const type: SearchRequest = SearchRequest.deserializeBinary(dataBuffer);

    console.log('SearchRequest Query field', type.getQuery())
});