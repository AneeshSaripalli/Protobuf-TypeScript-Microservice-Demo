import express from 'express';

const app: express.Application = express();

app.listen(8000, () => {
    console.log("Starting express server on port 8000;")
})