const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'development';

const app = require('express')()
  .use(cors())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(cors());

let connection;

const query = options => {
  const {
    query,
    data,
    isArray,
  } = options;

  return new Promise((resolve, reject) => {
    connection.query(query, data, (err, result) => {
      if (err) {
          reject(err);
      } else {
          resolve(isArray === false ? result[0] : result);
      }
    });
  });
};

app.route('/api/create-connection').post((req, res) => {
  connection = mysql.createConnection(req.body);

  res.send({ connected: connection.config ? true : false });
});

app.route('/api/query').post((req, res) => {
  query({ query: req.body.query })
    .then(data => res.send(data))
    .catch(error => console.log(error));
});

module.exports = app.listen(port, () => {
  console.log(`Server is running in ${env} mode on port ${port}`);
});