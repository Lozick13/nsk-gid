const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 8080;
const IP_ADDRESS = ''; // введите свой ip для бекенда


const db = require('./config/db.cjs');
const { MongoClient } = require('mongodb');
const client = new MongoClient(db.url);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

(async function () {
  try {
    await client.connect();

    require('./routes/index.cjs')(app, client.db('nsk_gid'));

    await app.listen(PORT, IP_ADDRESS, () => {
      console.log(`Сервер запущен на адресе http://${IP_ADDRESS}:${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
})();
