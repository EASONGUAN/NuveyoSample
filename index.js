import express from "express";
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body)
});

app.listen(PORT, () => {
    console.log(`Listening on port: http://localhost:${PORT}`)
});